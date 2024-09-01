import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import Quests from '../structures/Static/Quests';
import { RequestOptions } from '../Private/Requests';

class getQuests extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<Quests> {
    const res = await this.client.requests.request('/resources/quests', options);
    if (res.options.raw) return res.data;
    return new Quests(res.data);
  }
}

export default getQuests;
