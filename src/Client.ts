import CheckUpdates from './Private/CheckUpdates';
import CacheHandler from './Private/CacheHandler';
import { ClientOptions } from './typings/Client';
import Requests from './Private/Requests';
import Errors from './Errors';
import API from './API';

const clients: any[] = [];

class Client {
  readonly key: string;

  declare requests: Requests;
  declare cacheHandler: CacheHandler;

  declare cache: boolean;
  declare cacheTime: number;
  declare cacheMaxKeys: number;
  declare cacheCheckPeriod: number;
  declare rateLimit?: 'AUTO' | 'HARD' | 'NONE';
  declare silent: boolean;
  declare checkForUpdates: boolean;

  constructor(key: string, options?: ClientOptions) {
    this.key = key;

    this.cache = options?.cache ?? true;
    this.cacheTime = options?.cacheTime ?? 300;
    this.cacheMaxKeys = options?.cacheMaxKeys ?? -1;
    this.cacheCheckPeriod = options?.cacheCheckPeriod ?? 180;
    this.rateLimit = options?.rateLimit ?? 'AUTO';
    this.silent = options?.silent ?? false;
    this.checkForUpdates = options?.checkForUpdates ?? true;

    this.requests = new Requests(this);
    this.cacheHandler = new CacheHandler(this);

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
      console.warn(Errors.MULTIPLE_INSTANCES);
      return clients.find((x) => x.key === key);
    }

    if (this.checkForUpdates) {
      CheckUpdates().catch(() => {
        // eslint-disable-next-line no-console
        if (!this.silent) console.warn(Errors.UPDATER_REQUEST_NOT_OK);
      });
    }

    clients.push(this);
  }
}

export default Client;
