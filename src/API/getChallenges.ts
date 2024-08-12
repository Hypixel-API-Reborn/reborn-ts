import Challenges from '../structures/Static/Challenges';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getChallenges extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute() {
    const res = await this.client.requests.request('/resources/challenges');
    if (res.raw) return res;
    return new Challenges(res);
  }
}
