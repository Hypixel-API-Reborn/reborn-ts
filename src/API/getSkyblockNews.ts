import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import SkyblockNews from '../structures/SkyBlock/News/SkyblockNews';
import { RequestData, RequestOptions } from '../Private/RequestHandler';

class getSkyblockNews extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<SkyblockNews[] | RequestData> {
    const res = await this.client.requestHandler.request('/skyblock/news', options);
    if (res.options.raw) return res;
    return res.data.items.map((i: any) => new SkyblockNews(i));
  }
}

export default getSkyblockNews;
