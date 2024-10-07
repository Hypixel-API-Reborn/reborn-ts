import Achievements from '../structures/Static/Achievements/Achievements.js';
import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import { RequestData, RequestOptions } from '../Private/RequestHandler.js';

class getAchievements extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<Achievements | RequestData> {
    const res = await this.client.requestHandler.request('/resources/achievements', options);
    if (res.options.raw) return res;
    return new Achievements(res.data);
  }
}

export default getAchievements;
