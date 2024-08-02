import Challenges from '../structures/Static/Challenges';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';
export default class getChallenges extends Endpoint {
  readonly client: Client;
  readonly name: string;
  constructor(client: Client) {
    super(client);
    this.client = client;
    this.name = 'getChallenges';
  }

  async execute() {
    const res = await this.client.requests.request('/resources/challenges');
    if (res.raw) return res;
    return new Challenges(res);
  }
}
