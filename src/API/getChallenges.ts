import Challenges from '../structures/Static/Challenges';
import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import { RequestOptions } from '../Private/Requests';

class getChallenges extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<Challenges> {
    const res = await this.client.requests.request('/resources/challenges', options);
    if (res.options.raw) return res.data;
    return new Challenges(res.data);
  }
}
export default getChallenges;
