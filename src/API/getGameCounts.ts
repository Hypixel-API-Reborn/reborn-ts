import GameCounts from '../structures/GameCounts';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';
export default class getGameCounts extends Endpoint {
  readonly client: Client;
  readonly name: string;
  constructor(client: Client) {
    super(client);
    this.client = client;
    this.name = 'getGameCounts';
  }

  async execute() {
    const res = await this.client.requests.request('/counts');
    if (res.raw) return res;
    return new GameCounts(res);
  }
}
