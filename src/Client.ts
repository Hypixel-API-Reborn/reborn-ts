import CacheHandler from './Private/CacheHandler';
import { ClientOptions } from './typings/Client';
import RateLimit from './Private/RateLimit';
import Requests from './Private/Requests';
import Updater from './Private/Updater';
import Errors from './Errors';
import API from './API';

const clients: Client[] = [];

class Client {
  declare options: ClientOptions;
  declare requests: Requests;
  declare cacheHandler: CacheHandler;
  declare updater: Updater;
  declare errors: Errors;
  declare rateLimit: RateLimit;

  readonly key: string;

  declare interval: NodeJS.Timeout;

  constructor(key: string, options?: ClientOptions) {
    this.key = key;
    this.parasOptions(options);
    if (!this.key.length) throw new Error(this.errors.NO_API_KEY);

    this.requests = new Requests(this);
    this.cacheHandler = new CacheHandler(this);
    this.updater = new Updater(this);
    this.errors = new Errors();
    this.rateLimit = new RateLimit(this);
    if ('NONE' !== this.options.rateLimit) this.rateLimit.initialize();

    for (const func in API) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const endpoint = new API[func](this);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      this[func] = endpoint.execute.bind(endpoint);
    }

    if (clients.find((x) => x.key === key)) {
      // eslint-disable-next-line no-console
      console.warn(this.errors.MULTIPLE_INSTANCES);
      const found = clients.find((x) => x.key === key);
      if (found) {
        this.destroy();
        Object.assign(this, found);
        return;
      }
      return;
    }

    if (this.options.checkForUpdates) {
      this.interval = setInterval(
        () => {
          this.updater.checkForUpdates();
        },
        1000 * 60 * (this.options.checkForUpdatesInterval ?? 60)
      );
    }

    clients.push(this);
  }

  destroy() {
    const clientIndex = clients.findIndex((client) => client.key === this.key);
    if (-1 !== clientIndex) clients.splice(clientIndex, 1);
    if (this.interval) clearInterval(this.interval);
    if (this.rateLimit.interval) clearInterval(this.rateLimit.interval);
  }

  private parasOptions(options?: ClientOptions) {
    this.options.cache = options?.cache ?? true;
    this.options.cacheTime = options?.cacheTime ?? 300;
    this.options.cacheMaxKeys = options?.cacheMaxKeys ?? -1;
    this.options.cacheCheckPeriod = options?.cacheCheckPeriod ?? 180;
    this.options.rateLimit = options?.rateLimit ?? 'AUTO';
    this.options.silent = options?.silent ?? false;
    this.options.checkForUpdates = options?.checkForUpdates ?? true;
    this.options.checkForUpdatesInterval = options?.checkForUpdatesInterval ?? 60;
  }
}

export default Client;
