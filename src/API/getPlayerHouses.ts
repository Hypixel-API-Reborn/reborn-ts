import Endpoint from '../Private/Endpoint';
import House from '../structures/House';
import toUuid from '../utils/toUuid';
import Errors from '../Errors';
import Client from '../Client';

export default class getPlayerHouses extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string): Promise<House[]> {
    if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
    query = await toUuid(query);
    const res = await this.client.requests.request(`/housing/houses?player=${query}`);
    if (res.raw) return res;
    return res.length ? res.map((h: any) => new House(h)) : [];
  }
}
