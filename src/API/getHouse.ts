import { RequestOptions } from '../Private/Requests';
import Endpoint from '../Private/Endpoint';
import House from '../structures/House';
import Client from '../Client';

export default class getHouse extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: RequestOptions): Promise<House> {
    if (!query) throw new Error(this.client.errors.NO_UUID);
    const res = await this.client.requests.request(`/housing/house?house=${query}`, options);
    if (res.raw) return res;
    return new House(res);
  }
}
