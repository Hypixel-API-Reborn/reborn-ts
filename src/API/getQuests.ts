import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import Quests from '../structures/Static/Quests.js';
import { RequestData, RequestOptions } from '../Private/RequestHandler.js';

class getQuests extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<Quests | RequestData> {
    const res = await this.client.requestHandler.request('/resources/quests', options);
    if (res.options.raw) return res;
    return new Quests(res.data);
  }
}

export default getQuests;
