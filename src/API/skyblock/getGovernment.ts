import GovernmentData from '../../structures/SkyBlock/Static/Government.js';
import { RequestOptions } from '../../Private/Requests.js';
import Endpoint from '../../Private/Endpoint.js';
import Client from '../../Client.js';

class getGovernment extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<GovernmentData> {
    const res = await this.client.requests.request('/resources/skyblock/election', options);
    if (res.options.raw) return res.data;
    return new GovernmentData(res.data);
  }
}

export default getGovernment;
