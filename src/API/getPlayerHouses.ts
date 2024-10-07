import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import Error from '../Private/ErrorHandler.js';
import House from '../structures/House.js';
import { RequestData, RequestOptions } from '../Private/RequestHandler.js';

class getPlayerHouses extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: RequestOptions): Promise<House[] | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID, 'Fetching Player Houses');
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/housing/houses?player=${query}`, options);
    if (res.options.raw) return res;
    return res.data.map((h: any) => new House(h));
  }
}

export default getPlayerHouses;
