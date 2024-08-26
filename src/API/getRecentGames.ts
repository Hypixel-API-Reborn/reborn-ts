import { RequestOptions } from '../Private/Requests';
import RecentGame from '../structures/RecentGame';
import Error from '../Private/ErrorHandler';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

class getRecentGames extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: RequestOptions): Promise<RecentGame[]> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID, 'Fetching Recent Games');
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/recentgames?uuid=${query}`, options);
    if (res.options.raw) return res.data;
    return res.data.games.map((x: any) => new RecentGame(x));
  }
}

export default getRecentGames;
