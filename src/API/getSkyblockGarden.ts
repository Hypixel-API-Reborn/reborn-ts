import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import Error from '../Private/ErrorHandler.js';
import SkyblockGarden from '../structures/SkyBlock/SkyblockGarden.js';
import { RequestData, RequestOptions } from '../Private/RequestHandler.js';

class getSkyblockGarden extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(profileId: string, options?: RequestOptions): Promise<SkyblockGarden | RequestData> {
    if (!profileId) throw new Error(this.client.errors.NO_UUID, 'Fetching Skyblock Garden');
    const res = await this.client.requestHandler.request(`/skyblock/garden?profile=${profileId}`, options);
    if (res.options.raw) return res;
    return new SkyblockGarden(res.data);
  }
}

export default getSkyblockGarden;
