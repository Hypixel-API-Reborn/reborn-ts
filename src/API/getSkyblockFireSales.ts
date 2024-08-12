import FireSale from '../structures/SkyBlock/Static/FireSale';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getSkyblockFireSales extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(): Promise<FireSale[]> {
    const res = await this.client.requests.request('/skyblock/firesales');
    if (res.raw) return res;
    return res.sales.length ? res.sales.map((a: any) => new FireSale(a)) : [];
  }
}
