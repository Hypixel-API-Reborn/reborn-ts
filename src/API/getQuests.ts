import { RequestOptions } from '../Private/Requests';
import Quests from '../structures/Static/Quests';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getQuests extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<Quests> {
    const res = await this.client.requests.request('/resources/quests', options);
    if (res.raw) return res;
    return new Quests(res);
  }
}
