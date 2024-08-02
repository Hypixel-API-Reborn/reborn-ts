import GovernmentData from '../structures/SkyBlock/Static/Government.js';
import Endpoint from '../Private/Endpoint.js';
import Client from '../Client.js';
export default class getSkyblockGovernment extends Endpoint {
  readonly client: Client;
  readonly name: string;
  constructor(client: Client) {
    super(client);
    this.client = client;
    this.name = 'getSkyblockGovernment';
  }

  async execute() {
    const res = await this.client.requests.request('/resources/skyblock/election');
    if (res.raw) return res;
    return new GovernmentData(res);
  }
}
