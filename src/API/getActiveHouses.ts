import { RequestOptions } from '../Private/Requests';
import Endpoint from '../Private/Endpoint';
import House from '../structures/House';
import Client from '../Client';

class getActiveHouses extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<House[]> {
    const res = await this.client.requests.request('/housing/active', options);
    if (res.raw) return res;
    return res.map((b: any) => new House(b));
  }
}

export default getActiveHouses;
