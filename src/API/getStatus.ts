import { RequestOptions } from '../Private/Requests';
import Endpoint from '../Private/Endpoint';
import Status from '../structures/Status';
import Client from '../Client';

export default class getStatus extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: RequestOptions): Promise<Status> {
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/status?uuid=${query}`, options);
    if (res.raw) return res;
    return new Status(res.session);
  }
}
