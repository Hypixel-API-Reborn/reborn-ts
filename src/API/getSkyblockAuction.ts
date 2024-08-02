import Auction from '../structures/SkyBlock/Auctions/Auction';
import Endpoint from '../Private/Endpoint';
import toUuid from '../utils/toUuid';
import Errors from '../Errors';
import Client from '../Client';
export default class getSkyblockAction extends Endpoint {
  readonly client: Client;
  readonly name: string;
  constructor(client: Client) {
    super(client);
    this.client = client;
    this.name = 'getSkyblockAction';
  }

  async execute(query: string, type: 'PROFILE' | 'PLAYER' | 'AUCTION', includeItemBytes: boolean = false) {
    if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
    let filter;
    if ('PROFILE' === type) {
      filter = 'profile';
    } else if ('PLAYER' === type) {
      query = await toUuid(query);
      filter = 'player';
    } else if ('AUCTION' === type) {
      filter = 'uuid';
    } else {
      throw new Error(Errors.BAD_AUCTION_FILTER);
    }
    const res = await this.client.requests.request(`/skyblock/auction?${filter}=${query}`);
    if (res.raw) return res;
    return res.auctions.length ? res.auctions.map((a: any) => new Auction(a, includeItemBytes)) : [];
  }
}
