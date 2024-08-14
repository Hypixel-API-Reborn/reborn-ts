import Endpoint from '../Private/Endpoint';
import Player from '../structures/Player';
import Client from '../Client';

export default class getPlayer extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string): Promise<Player> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/player?uuid=${query}`);
    if (res.raw) return res;
    if (query && !res.player) throw new Error(this.client.errors.PLAYER_HAS_NEVER_LOGGED);
    return new Player(res.player);
  }
}
