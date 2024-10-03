import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import FireSale from '../structures/SkyBlock/Static/FireSale';
import { RequestData, RequestOptions } from '../Private/RequestHandler';

class getSkyblockFireSales extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<FireSale[] | RequestData> {
    const res = await this.client.requestHandler.request('/skyblock/firesales', options);
    if (res.options.raw) return res;
    return res.data.sales.map((a: any) => new FireSale(a));
  }
}

export default getSkyblockFireSales;
