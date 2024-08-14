import SkyblockMuseum from '../structures/SkyBlock/SkyblockMuseum';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getSkyblockMuseum extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, profileId: string): Promise<SkyblockMuseum> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/skyblock/museum?uuid=${query}&profile=${profileId}`);
    if (res.raw) return res;
    return new SkyblockMuseum({
      uuid: query,
      m: res,
      profileId: profileId
    });
  }
}
