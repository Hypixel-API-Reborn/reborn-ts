import { RequestOptions } from '../Private/Requests';
import Error from '../Private/ErrorHandler';
import Endpoint from '../Private/Endpoint';
import House from '../structures/House';
import Client from '../Client';

class getHouse extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: RequestOptions): Promise<House> {
    if (!query) throw new Error(this.client.errors.NO_UUID, 'Fetching a House');
    const res = await this.client.requests.request(`/housing/house?house=${query}`, options);
    if (res.options.raw) return res.data;
    return new House(res.data);
  }
}

export default getHouse;
