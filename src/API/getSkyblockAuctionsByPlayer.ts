import Auction from '../structures/SkyBlock/Auctions/Auction';
import Endpoint from '../Private/Endpoint';
import toUuid from '../utils/toUuid';
import Errors from '../Errors';
import Client from '../Client';

export default class getSkyblockActionsByPlayer extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, includeItemBytes: boolean) {
    if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
    query = await toUuid(query);
    const res = await this.client.requests.request(`/skyblock/auction?player=${query}`);
    if (res.raw) return res;
    return res.auctions.length ? res.auctions.map((a: any) => new Auction(a, includeItemBytes)) : [];
  }
}
