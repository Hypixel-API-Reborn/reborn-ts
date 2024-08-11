import Endpoint from '../Private/Endpoint';
import House from '../structures/House';
import Errors from '../Errors';
import Client from '../Client';
export default class getHouse extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string) {
    if (!query) throw new Error(Errors.NO_UUID);
    const res = await this.client.requests.request(`/housing/house?house=${query}`);
    if (res.raw) return res;
    return new House(res);
  }
}
