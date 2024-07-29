import RecentGame from '../structures/RecentGame';
import Endpoint from '../Private/Endpoint';
import toUuid from '../utils/toUuid';
import Errors from '../Errors';
import Client from '../Client';
export default class getRecentGames extends Endpoint {
  readonly client: Client;
  readonly name: string;
  constructor(client: Client) {
    super(client);
    this.client = client;
    this.name = 'getRecentGames';
  }

  async execute(query: string) {
    if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
    query = await toUuid(query);
    const res = await this.client.requests.request(`/recentgames?uuid=${query}`);
    if (res.raw) return res;
    if (0 === res.games.length) {
      return [];
    }
    return res.games.map((x: any) => new RecentGame(x));
  }
}
