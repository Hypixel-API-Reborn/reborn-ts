import SkyblockNews from '../structures/SkyBlock/News/SkyblockNews';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';
export default class getSkyblockNews extends Endpoint {
  readonly client: Client;
  readonly name: string;
  constructor(client: Client) {
    super(client);
    this.client = client;
    this.name = 'getSkyblockNews';
  }

  async execute() {
    const res = await this.client.requests.request('/skyblock/news');
    if (res.raw) return res;
    return res.items.map((i: any) => new SkyblockNews(i));
  }
}