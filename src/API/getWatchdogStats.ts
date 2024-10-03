import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import WatchdogStats from '../structures/WatchdogStats';
import { RequestData, RequestOptions } from '../Private/RequestHandler';

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
