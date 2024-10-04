import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import SkyblockMuseum from '../structures/SkyBlock/SkyblockMuseum';
import { RequestData, RequestOptions } from '../Private/RequestHandler';

class getSkyblockMuseum extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, profileId: string, options?: RequestOptions): Promise<SkyblockMuseum | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
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
