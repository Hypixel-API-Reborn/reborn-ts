import { RequestOptions } from '../Private/Requests';
import RecentGame from '../structures/RecentGame';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getRecentGames extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: RequestOptions): Promise<RecentGame[]> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/recentgames?uuid=${query}`, options);
    if (res.raw) return res;
    return res.games.map((x: any) => new RecentGame(x));
  }
}
