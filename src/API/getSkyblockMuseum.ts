import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import Error from '../Private/ErrorHandler.js';
import SkyblockMuseum from '../structures/SkyBlock/SkyblockMuseum.js';
import { RequestData, RequestOptions } from '../Private/RequestHandler.js';

class getSkyblockMuseum extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, profileId: string, options?: RequestOptions): Promise<SkyblockMuseum | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID, 'Fetching Skyblock Museum');
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(
      `/skyblock/museum?uuid=${query}&profile=${profileId}`,
      options
    );
    if (res.options.raw) return res;
    return new SkyblockMuseum({ uuid: query, m: res.data, profileId: profileId });
  }
}

export default getSkyblockMuseum;
