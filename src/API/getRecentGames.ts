import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import Error from '../Private/ErrorHandler.js';
import RecentGame from '../structures/RecentGame.js';
import { RequestData, RequestOptions } from '../Private/RequestHandler.js';

class getRecentGames extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: RequestOptions): Promise<RecentGame[] | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID, 'Fetching Recent Games');
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/recentgames?uuid=${query}`, options);
    if (res.options.raw) return res;
    return res.data.games.map((x: any) => new RecentGame(x));
  }
}

export default getRecentGames;
