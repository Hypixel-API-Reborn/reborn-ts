import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import RecentGame from '../structures/RecentGame';
import { RequestOptions } from '../Private/RequestHandler';

class getRecentGames extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: RequestOptions): Promise<RecentGame[]> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/recentgames?uuid=${query}`, options);
    if (res.options.raw) return res.data;
    return res.data.games.map((x: any) => new RecentGame(x));
  }
}

export default getRecentGames;
