import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import House from '../structures/House';
import { RequestOptions } from '../Private/Requests';

class getActiveHouses extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<House[]> {
    const res = await this.client.requests.request('/housing/active', options);
    if (res.options.raw) return res.data;
    return res.data.map((b: any) => new House(b));
  }
}

export default getActiveHouses;
