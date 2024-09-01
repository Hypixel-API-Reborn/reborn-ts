import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import FireSale from '../structures/SkyBlock/Static/FireSale';
import { RequestOptions } from '../Private/Requests';

class getSkyblockFireSales extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<FireSale[]> {
    const res = await this.client.requests.request('/skyblock/firesales', options);
    if (res.options.raw) return res.data;
    return res.data.sales.map((a: any) => new FireSale(a));
  }
}

export default getSkyblockFireSales;
