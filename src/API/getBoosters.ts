import Booster from '../structures/Boosters/Booster';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';
export default class getBoosters extends Endpoint {
  readonly client: Client;
  readonly name: string;
  constructor(client: Client) {
    super(client);
    this.client = client;
    this.name = 'getBoosters';
  }

  async execute() {
    const res = await this.client.requests.request('/boosters');
    if (res.raw) return res;
    return res.boosters.length ? res.boosters.map((b: any) => new Booster(b)).reverse() : [];
  }
}
