import SkyblockMuseum from '../structures/SkyBlock/SkyblockMuseum';
import Endpoint from '../Private/Endpoint';
import toUuid from '../utils/toUuid';
import Errors from '../Errors';
import Client from '../Client';

export default class getSkyblockMuseum extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, profileId: string): Promise<SkyblockMuseum> {
    if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
    query = await toUuid(query);
    const res = await this.client.requests.request(`/skyblock/museum?uuid=${query}&profile=${profileId}`);
    if (res.raw) return res;
    return new SkyblockMuseum({
      uuid: query,
      m: res,
      profileId: profileId
    });
  }
}
