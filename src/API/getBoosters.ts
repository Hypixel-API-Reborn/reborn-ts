import Booster from '../structures/Boosters/Booster';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getBoosters extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute() {
    const res = await this.client.requests.request('/boosters');
    if (res.raw) return res;
    return res.boosters.length ? res.boosters.map((b: any) => new Booster(b)).reverse() : [];
  }
}
