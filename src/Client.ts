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

export default class Client {
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
    this.loadEndpoints();
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

  async loadEndpoints() {
    const endpoints = fs.readdirSync('./src/API').filter((file) => file.endsWith('.ts'));
    for (const endpoint of endpoints) {
      const { default: EndpointClass } = await import(`./API/${endpoint}`);
      const endpointInstance = new EndpointClass(this);
      (this as any)[endpointInstance.name] = endpointInstance.execute.bind(endpointInstance);
    }
  }
}

export async function createClient(key: string, options?: ClientOptions): Promise<Client> {
  const client = new Client(key, options);
  await client.loadEndpoints();
  return client;
}
