import Achievements from '../structures/Static/Achievements';
import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import { RequestOptions } from '../Private/Requests';

class getAchievements extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<Achievements> {
    const res = await this.client.requests.request('/resources/achievements', options);
    if (res.options.raw) return res.data;
    return new Achievements(res.data);
  }
}

export default getAchievements;
