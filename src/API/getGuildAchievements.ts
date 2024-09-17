import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import GuildAchievements from '../structures/Static/GuildAchievements';
import { RequestOptions } from '../Private/RequestHandler';

class getGuildAchievements extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<GuildAchievements> {
    const res = await this.client.requestHandler.request('/resources/guilds/achievements', options);
    if (res.options.raw) return res.data;
    return new GuildAchievements(res.data);
  }
}

export default getGuildAchievements;
