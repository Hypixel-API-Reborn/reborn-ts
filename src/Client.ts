import CacheHandler from './Private/CacheHandler';
import { ClientOptions } from './typings/Client';
import Requests from './Private/Requests';
import Updater from './Private/Updater';
import Errors from './Errors';
import API from './API';

const clients: Client[] = [];

class Client {
  getGuild(...args: any[]): Promise<any> | any {
    throw new Error('Method not implemented.');
  }
  readonly key: string;

  declare requests: Requests;
  declare cacheHandler: CacheHandler;
  declare updater: Updater;
  declare errors: Errors;

  declare options: ClientOptions;

  constructor(key: string, options?: ClientOptions) {
    this.key = key;

    this.options = this.parasOptions(options);
    this.requests = new Requests(this);
    this.cacheHandler = new CacheHandler(this);
    this.updater = new Updater(this);
    this.errors = new Errors();

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
      if (found) return found;
    }

    if (this.options.checkForUpdates) {
      setInterval(
        () => {
          this.updater.checkForUpdates();
          // 3600000 ms = 1 hour
        },
        1000 * 60 * (this.options.checkForUpdatesInterval ?? 60)
      );
    }

    clients.push(this);
  }

  private parasOptions(options?: ClientOptions): ClientOptions {
    return {
      cache: options?.cache ?? true,
      cacheTime: options?.cacheTime ?? 300,
      cacheMaxKeys: options?.cacheMaxKeys ?? -1,
      cacheCheckPeriod: options?.cacheCheckPeriod ?? 180,
      rateLimit: options?.rateLimit ?? 'AUTO',
      silent: options?.silent ?? false,
      checkForUpdates: options?.checkForUpdates ?? true,
      checkForUpdatesInterval: options?.checkForUpdatesInterval ?? 60
    };
  }
}

export default Client;
