import Achievements from '../structures/Static/Achievements';
import { RequestOptions } from '../Private/Requests';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

class getAchievements extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<Achievements> {
    const res = await this.client.requests.request('/resources/achievements', options);
    if (res.raw) return res;
    return new Achievements(res);
  }
}

export default getAchievements;
