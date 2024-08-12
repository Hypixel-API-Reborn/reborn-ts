import Product from '../structures/SkyBlock/Bazzar/Product';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getSkyblockBazaar extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(): Promise<Product[]> {
    const res = await this.client.requests.request('/skyblock/bazaar');
    if (res.raw) return res;
    const productsKeys = Object.keys(res.products);
    return productsKeys.map((x) => new Product(res.products[x]));
  }
}
