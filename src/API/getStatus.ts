import Endpoint from '../Private/Endpoint';
import Status from '../structures/Status';
import toUuid from '../utils/toUuid';
import Client from '../Client';

export default class getStatus extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string): Promise<Status> {
    query = await toUuid(query);
    const res = await this.client.requests.request(`/status?uuid=${query}`);
    if (res.raw) return res;
    return new Status(res.session);
  }
}
