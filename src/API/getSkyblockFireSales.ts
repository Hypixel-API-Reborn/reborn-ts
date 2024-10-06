import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import FireSale from '../structures/SkyBlock/Static/FireSale.js';
import { RequestData, RequestOptions } from '../Private/RequestHandler.js';

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
