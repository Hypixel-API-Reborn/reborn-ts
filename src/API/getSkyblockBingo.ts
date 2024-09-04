import BingoData from '../structures/SkyBlock/Static/BingoData';
import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import { RequestOptions } from '../Private/RequestHandler';

class getSkyblockBingo extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<BingoData> {
    const res = await this.client.requestHandler.request('/resources/skyblock/bingo', options);
    if (res.options.raw) return res.data;
    return new BingoData(res.data);
  }
}

export default getSkyblockBingo;
