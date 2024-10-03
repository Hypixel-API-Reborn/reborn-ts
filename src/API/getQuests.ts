import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import Quests from '../structures/Static/Quests';
import { RequestData, RequestOptions } from '../Private/RequestHandler';

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
