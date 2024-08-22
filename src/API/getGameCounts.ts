import { RequestOptions } from '../Private/Requests';
import GameCounts from '../structures/GameCounts';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

class getGameCounts extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<GameCounts> {
    const res = await this.client.requests.request('/counts', options);
    if (res.raw) return res;
    return new GameCounts(res);
  }
}

export default getGameCounts;
