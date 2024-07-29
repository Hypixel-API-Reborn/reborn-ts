import Endpoint from '../Private/Endpoint';
import Status from '../structures/Status';
import toUuid from '../utils/toUuid';
import Client from '../Client';
export default class getStatus extends Endpoint {
  readonly client: Client;
  readonly name: string;
  constructor(client: Client) {
    super(client);
    this.client = client;
    this.name = 'getStatus';
  }

  async execute(query: string) {
    query = await toUuid(query);
    const res = await this.client.requests.request(`/status?uuid=${query}`);
    if (res.raw) return res;
    return new Status(res.session);
  }
}
