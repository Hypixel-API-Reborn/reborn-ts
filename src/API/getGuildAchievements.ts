import GuildAchievements from '../structures/Static/GuildAchievements';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';
export default class getGuildAchievements extends Endpoint {
  readonly client: Client;
  readonly name: string;
  constructor(client: Client) {
    super(client);
    this.client = client;
    this.name = 'getGuildAchievements';
  }

  async execute() {
    const res = await this.client.requests.request('/resources/guilds/achievements');
    if (res.raw) return res;
    return new GuildAchievements(res);
  }
}
