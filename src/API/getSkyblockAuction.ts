import Auction from '../structures/SkyBlock/Auctions/Auction';
import { AuctionRequestOptions } from './API';
import Error from '../Private/ErrorHandler';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

class getSkyblockAction extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(
    type: 'profile' | 'player' | 'auction',
    query: string,
    options?: AuctionRequestOptions
  ): Promise<Auction[]> {
    let filter;
    if ('profile' === type) {
      filter = 'profile';
    } else if ('player' === type) {
      query = await this.client.requests.toUUID(query);
      filter = 'player';
    } else if ('auction' === type) {
      filter = 'uuid';
    } else {
      throw new Error(this.client.errors.BAD_AUCTION_FILTER, 'Fetching Skyblock Auction');
    }
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID, 'Fetching Skyblock Auction');
    const res = await this.client.requests.request(`/skyblock/auction?${filter}=${query}`, options);
    if (res.options.raw) return res.data;
    return res.data.auctions.map(
      (a: Record<string, string | number | object>) => new Auction(a, options?.includeItemBytes ?? false)
    );
  }
}

export default getSkyblockAction;
