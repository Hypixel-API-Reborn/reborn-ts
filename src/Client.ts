import { ClientOptions } from './typings/index';
import rateLimit from './Private/rateLimit';
import Cache from './Private/defaultCache';
import Requests from './Private/requests';
import validate from './Private/validate';
import updater from './Private/updater';
import EventEmitter from 'events';
import API from './API/index';
import Errors from './Errors';

const clients: any[] = [];

function handleOptions(options: ClientOptions) {
  if (!options.cache) options.cache = true;
  if (!options.hypixelCacheTime) options.hypixelCacheTime = 60;
  if (!options.mojangCacheTime) options.mojangCacheTime = 600;
  if (!options.rateLimit) options.rateLimit = 'AUTO';
  if (!options.syncWithHeaders) options.syncWithHeaders = false;
  if (!options.keyLimit) options.keyLimit = 60;
  if (!options.cacheSize) options.cacheSize = -1;
  if (!options.silent) options.silent = false;
  if (!options.headers) options.headers = {};
  if (!options.checkForUpdates) options.checkForUpdates = true;
  if (!options.useThirdPartyAPI) options.useThirdPartyAPI = false;
  return options;
}

class Client extends EventEmitter {
  requests: any;
  key: string | undefined;
  options: ClientOptions | undefined;
  cache: Cache | undefined;
  constructor(key: string, options: ClientOptions) {
    super();
    this.requests = new Requests(this, options.cacheHandler);
    // eslint-disable-next-line no-console
    if (options && !options.silent) this.on('warn', console.warn);
    if (clients.find((x) => x.key === key)) {
      this.emit('warn', Errors.MULTIPLE_INSTANCES);
      return clients.find((x) => x.key === key);
    }
    this.key = key;
    this.options = handleOptions(options);

    for (const func in API) {
      this[func] = (...args: string | any[]) => {
        const lastArg = args[args.length - 1];
        return API[func].apply(
          {
            // eslint-disable-next-line no-underscore-dangle
            _makeRequest: this._makeRequest.bind(this, validate.cacheSuboptions(lastArg) ? lastArg : {}),
            ...this
          },
          args
        );
      };
    }

    if (this.options.checkForUpdates) {
      try {
        updater.checkForUpdates();
      } catch (error) {
        if (this.options && !this.options.silent) {
          // eslint-disable-next-line no-console
          console.warn('[hypixel-api-reborn] Error whilst checking for updates!');
        }
      }
    }

    this.cache = this.requests.cache;
    clients.push(this);
    rateLimit.init(this.getGameCounts(), this.options, this).then(() => this.emit('ready'));
  }
  getGameCounts(): any {
    throw new Error('Method not implemented.');
  }

  async _makeRequest(options: { noCacheCheck: any; raw: any; headers: any }, url: string, useRateLimitManager = true) {
    if (!url) return;
    if ('/key' !== url && !options.noCacheCheck && (await this.requests.cache.has(url))) {
      return Object.assign(await this.requests.cache.get(url), { raw: Boolean(options.raw) });
    }
    if (useRateLimitManager) await rateLimit.rateLimitManager();
    this.emit('outgoingRequest', url, { ...options, headers: { ...options.headers, ...this.options.headers } });
    const result = await this.requests.request.call(this.requests, url, {
      ...options,
      headers: { ...options.headers, ...this.options?.headers }
    });
    // eslint-disable-next-line no-underscore-dangle
    if (this.options && this.options.syncWithHeaders && result._headers) rateLimit.sync(result._headers);
    return result;
  }
}

export default Client;
