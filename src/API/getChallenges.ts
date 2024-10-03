import Challenges from '../structures/Static/Challenges';
import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import { RequestData, RequestOptions } from '../Private/RequestHandler';

class getChallenges extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<Challenges | RequestData> {
    const res = await this.client.requestHandler.request('/resources/challenges', options);
    if (res.options.raw) return res;
    return new Challenges(res.data);
  }
}
export default getChallenges;
