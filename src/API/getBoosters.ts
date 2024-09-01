import Booster from '../structures/Boosters/Booster';
import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import { RequestOptions } from '../Private/Requests';

class getBoosters extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<Booster[]> {
    const res = await this.client.requests.request('/boosters', options);
    if (res.options.raw) return res.data;
    return res.data.boosters.map((b: any) => new Booster(b)).reverse();
  }
}

export default getBoosters;
