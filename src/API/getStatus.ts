import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import Status from '../structures/Status';
import { RequestOptions } from '../Private/RequestHandler';

class getStatus extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: RequestOptions): Promise<Status> {
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/status?uuid=${query}`, options);
    if (res.options.raw) return res.data;
    return new Status(res.data.session);
  }
}

export default getStatus;
