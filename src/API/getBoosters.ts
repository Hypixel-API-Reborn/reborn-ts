import { RequestOptions } from '../Private/Requests';
import Booster from '../structures/Boosters/Booster';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

class getBoosters extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<Booster[]> {
    const res = await this.client.requests.request('/boosters', options);
    if (res.raw) return res;
    return res.boosters.map((b: any) => new Booster(b)).reverse();
  }
}

export default getBoosters;
