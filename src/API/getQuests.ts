import Quests from '../structures/Static/Quests';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';
export default class getQuests extends Endpoint {
  readonly client: Client;
  readonly name: string;
  constructor(client: Client) {
    super(client);
    this.client = client;
    this.name = 'getQuests';
  }

  async execute() {
    const res = await this.client.requests.request('/resources/quests');
    if (res.raw) return res;
    return new Quests(res);
  }
}
