import Quests from '../structures/Static/Quests';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getQuests extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(): Promise<Quests> {
    const res = await this.client.requests.request('/resources/quests');
    if (res.raw) return res;
    return new Quests(res);
  }
}
