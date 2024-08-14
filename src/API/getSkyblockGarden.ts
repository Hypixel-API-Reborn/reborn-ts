import SkyblockGarden from '../structures/SkyBlock/SkyblockGarden';
import { RequestOptions } from '../Private/Requests';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getSkyblockGarden extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(profileId: string, options?: RequestOptions): Promise<SkyblockGarden> {
    const res = await this.client.requests.request(`/skyblock/garden?profile=${profileId}`, options);
    if (res.raw) return res;
    return new SkyblockGarden(res);
  }
}
