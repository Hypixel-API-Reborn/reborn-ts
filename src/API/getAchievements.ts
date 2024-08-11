import Achievements from '../structures/Static/Achievements';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';
export default class getAchievements extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute() {
    const res = await this.client.requests.request('/resources/achievements');
    if (res.raw) return res;
    return new Achievements(res);
  }
}
