import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import Guild from '../structures/Guild/Guild';
import House from '../structures/House';
import Player from '../structures/Player';
import RecentGame from '../structures/RecentGame';
import { PlayerRequestOptions } from './API';
import { RequestData } from '../Private/RequestHandler';

class getPlayer extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: PlayerRequestOptions): Promise<Player | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/player?uuid=${query}`, options);
    if (res.options.raw) return res;
    if (query && !res.data.player) throw new Error(this.client.errors.PLAYER_HAS_NEVER_LOGGED);
    return new Player(res.data.player, {
      guild: options?.guild ? ((await this.client.getGuild('player', query)) as Guild) : null,
      houses: options?.houses ? ((await this.client.getPlayerHouses(query)) as House[]) : null,
      recentGames: options?.recentGames ? ((await this.client.getRecentGames(query)) as RecentGame[]) : null
    });
  }
}

export default getPlayer;
