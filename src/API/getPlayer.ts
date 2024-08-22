import { PlayerRequestOptions } from './API';
import Endpoint from '../Private/Endpoint';
import Player from '../structures/Player';
import Client from '../Client';

class getPlayer extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: PlayerRequestOptions): Promise<Player> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/player?uuid=${query}`, options);
    if (res.raw) return res;
    if (query && !res.player) throw new Error(this.client.errors.PLAYER_HAS_NEVER_LOGGED);
    return new Player(res.player, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      guild: options?.guild ? await this.client.getGuild('player', query) : null,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      houses: options?.houses ? await this.client.getPlayerHouses(query) : null,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      recentGames: options?.recentGames ? await this.client.getRecentGames(query) : null
    });
  }
}

export default getPlayer;
