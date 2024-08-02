import SkyblockGarden from '../structures/SkyBlock/SkyblockGarden';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';
export default class getSkyblockGarden extends Endpoint {
  readonly client: Client;
  readonly name: string;
  constructor(client: Client) {
    super(client);
    this.client = client;
    this.name = 'getSkyblockGarden';
  }

  async execute(profileId: string) {
    const res = await this.client.requests.request(`/skyblock/garden?profile=${profileId}`);
    if (res.raw) return res;
    return new SkyblockGarden(res);
  }
}
