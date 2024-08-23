import BingoData from '../../structures/SkyBlock/Static/BingoData';
import { RequestOptions } from '../../Private/Requests';
import Endpoint from '../../Private/Endpoint';
import Client from '../../Client';

class getBingo extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<BingoData> {
    const res = await this.client.requests.request('/resources/skyblock/bingo', options);
    if (res.options.raw) return res.data;
    return new BingoData(res.data);
  }
}

export default getBingo;
