import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import House from '../structures/House';
import { RequestData, RequestOptions } from '../Private/RequestHandler';

class getHouse extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: RequestOptions): Promise<House | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_UUID);
    const res = await this.client.requestHandler.request(`/housing/house?house=${query}`, options);
    if (res.options.raw) return res;
    return new House(res.data);
  }
}

export default getHouse;
