import SkyblockMuseum from '../structures/SkyBlock/SkyblockMuseum';
import { RequestOptions } from '../Private/Requests';
import Error from '../Private/ErrorHandler';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

class getSkyblockMuseum extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, profileId: string, options?: RequestOptions): Promise<SkyblockMuseum> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID, 'Fetching Skyblock Museum');
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/skyblock/museum?uuid=${query}&profile=${profileId}`, options);
    if (res.options.raw) return res.data;
    return new SkyblockMuseum({ uuid: query, m: res.data, profileId: profileId });
  }
}

export default getSkyblockMuseum;
