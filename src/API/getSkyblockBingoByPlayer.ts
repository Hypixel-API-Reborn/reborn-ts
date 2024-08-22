import PlayerBingo from '../structures/SkyBlock/PlayerBingo';
import { RequestOptions } from '../Private/Requests';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

class getBingoByPlayer extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: RequestOptions): Promise<PlayerBingo> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/skyblock/uuid?player=${query}`, options);
    if (res.raw) return res;
    return new PlayerBingo(res);
  }
}

export default getBingoByPlayer;
