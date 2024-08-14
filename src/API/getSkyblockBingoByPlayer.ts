import PlayerBingo from '../structures/SkyBlock/PlayerBingo';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getBingoByPlayer extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string): Promise<PlayerBingo> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/skyblock/uuid?player=${query}`);
    if (res.raw) return res;
    return new PlayerBingo(res);
  }
}
