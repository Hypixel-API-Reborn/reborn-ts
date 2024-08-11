import GameCounts from '../structures/GameCounts';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';
export default class getGameCounts extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute() {
    const res = await this.client.requests.request('/counts');
    if (res.raw) return res;
    return new GameCounts(res);
  }
}
