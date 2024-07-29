import Endpoint from '../Private/Endpoint';
import House from '../structures/House';
import Client from '../Client';
export default class getActiveHouses extends Endpoint {
  readonly client: Client;
  readonly name: string;
  constructor(client: Client) {
    super(client);
    this.client = client;
    this.name = 'getActiveHouses';
  }

  async execute() {
    const res = await this.client.requests.request('/housing/active');
    if (res.raw) return res;
    return res.length ? res.map((b: any) => new House(b)) : [];
  }
}
