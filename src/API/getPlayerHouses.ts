import { RequestOptions } from '../Private/Requests';
import Endpoint from '../Private/Endpoint';
import House from '../structures/House';
import Client from '../Client';

class getPlayerHouses extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: RequestOptions): Promise<House[]> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/housing/houses?player=${query}`, options);
    if (res.raw) return res;
    return res.map((h: any) => new House(h));
  }
}

export default getPlayerHouses;
