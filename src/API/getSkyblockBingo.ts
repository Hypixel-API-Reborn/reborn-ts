import BingoData from '../structures/SkyBlock/Static/BingoData';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getSkyblockBingo extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute() {
    const res = await this.client.requests.request('/resources/skyblock/bingo');
    if (res.raw) return res;
    return new BingoData(res);
  }
}
