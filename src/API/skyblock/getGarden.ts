import SkyblockGarden from '../../structures/SkyBlock/SkyblockGarden';
import { RequestOptions } from '../../Private/Requests';
import Endpoint from '../../Private/Endpoint';
import Client from '../../Client';

class getGarden extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(profileId: string, options?: RequestOptions): Promise<SkyblockGarden> {
    if (!profileId) throw new Error(this.client.errors.NO_UUID);
    const res = await this.client.requests.request(`/skyblock/garden?profile=${profileId}`, options);
    if (res.options.raw) return res.data;
    return new SkyblockGarden(res.data);
  }
}

export default getGarden;
