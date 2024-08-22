import SkyblockNews from '../structures/SkyBlock/News/SkyblockNews';
import { RequestOptions } from '../Private/Requests';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

class getSkyblockNews extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<SkyblockNews[]> {
    const res = await this.client.requests.request('/skyblock/news', options);
    if (res.raw) return res;
    return res.items.map((i: any) => new SkyblockNews(i));
  }
}

export default getSkyblockNews;
