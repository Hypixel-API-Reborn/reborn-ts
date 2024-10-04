import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import SkyblockGarden from '../structures/SkyBlock/SkyblockGarden';
import { RequestData, RequestOptions } from '../Private/RequestHandler';

class getSkyblockGarden extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(profileId: string, options?: RequestOptions): Promise<SkyblockGarden | RequestData> {
    if (!profileId) throw new Error(this.client.errors.NO_UUID);
    const res = await this.client.requestHandler.request(`/skyblock/garden?profile=${profileId}`, options);
    if (res.options.raw) return res;
    return new SkyblockGarden(res.data);
  }
}

export default getSkyblockGarden;
