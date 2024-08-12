import Endpoint from '../Private/Endpoint';
import House from '../structures/House';
import Client from '../Client';

export default class getActiveHouses extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(): Promise<House[]> {
    const res = await this.client.requests.request('/housing/active');
    if (res.raw) return res;
    return res.length ? res.map((b: any) => new House(b)) : [];
  }
}
