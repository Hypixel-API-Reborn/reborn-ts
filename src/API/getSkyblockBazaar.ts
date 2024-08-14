import Product from '../structures/SkyBlock/Bazzar/Product';
import { RequestOptions } from '../Private/Requests';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getSkyblockBazaar extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<Product[]> {
    const res = await this.client.requests.request('/skyblock/bazaar', options);
    if (res.raw) return res;
    const productsKeys = Object.keys(res.products);
    return productsKeys.map((x) => new Product(res.products[x]));
  }
}
