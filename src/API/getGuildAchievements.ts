import GuildAchievements from '../structures/Static/GuildAchievements';
import { RequestOptions } from '../Private/Requests';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

class getGuildAchievements extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<GuildAchievements> {
    const res = await this.client.requests.request('/resources/guilds/achievements', options);
    if (res.raw) return res;
    return new GuildAchievements(res);
  }
}

export default getGuildAchievements;
