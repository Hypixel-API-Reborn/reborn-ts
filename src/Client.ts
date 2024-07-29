import CheckUpdates from './Private/CheckUpdates';
import CacheHandler from './Private/CacheHandler';
import Requests from './Private/Requests';
import Errors from './Errors';
import fs from 'fs';

const clients: any[] = [];

export interface ClientOptions {
  cache?: boolean;
  cacheTime?: number;
  cacheMaxKeys?: number;
  cacheCheckPeriod?: number;
  rateLimit?: 'AUTO' | 'HARD' | 'NONE';
  silent?: boolean;
  checkForUpdates?: boolean;
}

export class Client {
  readonly key?: string;

  declare requests: Requests;
  declare cacheHandler: CacheHandler;

  declare cache: boolean;
  declare cacheTime: number;
  declare cacheMaxKeys: number;
  declare cacheCheckPeriod: number;
  declare rateLimit?: 'AUTO' | 'HARD' | 'NONE';
  declare silent: boolean;
  declare checkForUpdates: boolean;
  declare endpoints: any;

  constructor(key: string, options?: ClientOptions) {
    this.key = key;

    this.cache = options?.cache ?? true;
    this.cacheTime = options?.cacheTime ?? 300;
    this.cacheMaxKeys = options?.cacheMaxKeys ?? -1;
    this.cacheCheckPeriod = options?.cacheCheckPeriod ?? 180;
    this.rateLimit = options?.rateLimit ?? 'AUTO';
    this.silent = options?.silent ?? false;
    this.checkForUpdates = options?.checkForUpdates ?? true;
    this.endpoints = {};

    this.requests = new Requests(this);
    this.cacheHandler = new CacheHandler(this);

    const endpoints = fs.readdirSync('./src/api').filter((file) => file.endsWith('.ts'));

    for (const file of endpoints) {
      import(`./api/${file}`).then((endpoint) => {
        const data = new endpoint.default(this);
        this.endpoints[data.name] = data.execute;
      });
    }
    setTimeout(() => {
      // console.log(this.endpoints);
    }, 1000);
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
