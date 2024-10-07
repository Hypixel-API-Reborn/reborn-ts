import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import GuildAchievements from '../structures/Static/Achievements/Guild.js';
import { RequestData, RequestOptions } from '../Private/RequestHandler.js';

class getGuildAchievements extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<GuildAchievements | RequestData> {
    const res = await this.client.requestHandler.request('/resources/guilds/achievements', options);
    if (res.options.raw) return res;
    return new GuildAchievements(res.data);
  }
}

export default getGuildAchievements;
