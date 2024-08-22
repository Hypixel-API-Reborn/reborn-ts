import { RequestOptions } from '../Private/Requests';
import Endpoint from '../Private/Endpoint';
import Status from '../structures/Status';
import Client from '../Client';

class getStatus extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: RequestOptions): Promise<Status> {
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/status?uuid=${query}`, options);
    if (res.options.raw) return res.data;
    return new Status(res.data.session);
  }
}

export default getStatus;
