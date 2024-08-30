import WatchdogStats from '../structures/WatchdogStats';
import { RequestOptions } from '../Private/Requests';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

class getWatchdogStats extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<WatchdogStats> {
    const res = await this.client.requests.request('/punishmentstats', options);
    if (res.options.raw) return res.data;
    return new WatchdogStats(res.data);
  }
}

export default getWatchdogStats;
