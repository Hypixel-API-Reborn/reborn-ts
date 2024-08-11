import WatchdogStats from '../structures/Watchdog/Stats';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getWatchdogStatsEndpoint extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute() {
    const res = await this.client.requests.request('/punishmentstats');
    if (res.raw) return res;
    return new WatchdogStats(res);
  }
}
