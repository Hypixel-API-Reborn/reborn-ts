import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import House from '../structures/House';
import { RequestData, RequestOptions } from '../Private/RequestHandler';

class getActiveHouses extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<House[] | RequestData> {
    const res = await this.client.requestHandler.request('/housing/active', options);
    if (res.options.raw) return res;
    return res.data.map((b: any) => new House(b));
  }
}

export default getActiveHouses;
