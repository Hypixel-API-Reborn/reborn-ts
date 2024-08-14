import Auction from '../structures/SkyBlock/Auctions/Auction';
import { AuctionRequestOptions } from './API';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getSkyblockAction extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(
    query: string,
    type: 'PROFILE' | 'PLAYER' | 'AUCTION',
    options?: AuctionRequestOptions
  ): Promise<Auction[]> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    let filter;
    if ('PROFILE' === type) {
      filter = 'profile';
    } else if ('PLAYER' === type) {
      query = await this.client.requests.toUUID(query);
      filter = 'player';
    } else if ('AUCTION' === type) {
      filter = 'uuid';
    } else {
      throw new Error(this.client.errors.BAD_AUCTION_FILTER);
    }
    const res = await this.client.requests.request(`/skyblock/auction?${filter}=${query}`, options);
    if (res.raw) return res;
    return res.auctions.length ? res.auctions.map((a: any) => new Auction(a, options?.includeItemBytes ?? false)) : [];
  }
}
