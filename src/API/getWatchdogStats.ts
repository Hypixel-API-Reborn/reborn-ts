import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import WatchdogStats from '../structures/WatchdogStats.js';
import { RequestData, RequestOptions } from '../Private/RequestHandler.js';

class getWatchdogStats extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<WatchdogStats | RequestData> {
    const res = await this.client.requestHandler.request('/punishmentstats', options);
    if (res.options.raw) return res;
    return new WatchdogStats(res.data);
  }
}

export default getWatchdogStats;
