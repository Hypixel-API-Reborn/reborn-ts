import Auction from '../structures/SkyBlock/Auctions/Auction.js';
import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import Error from '../Private/ErrorHandler.js';
import { AuctionFetchOptions, AuctionRequestOptions } from './API.js';
import { RequestData } from '../Private/RequestHandler.js';

class getSkyblockAction extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(
    type: AuctionFetchOptions,
    query: string,
    options?: AuctionRequestOptions
  ): Promise<Auction[] | RequestData> {
    let filter;
    if ('profile' === type) {
      filter = 'profile';
    } else if ('player' === type && query) {
      query = await this.client.requestHandler.toUUID(query);
      filter = 'player';
    } else if ('auction' === type) {
      filter = 'uuid';
    } else {
      throw new Error(this.client.errors.BAD_AUCTION_FILTER, 'Fetching Skyblock Auction');
    }
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID, 'Fetching Skyblock Auction');
    const res = await this.client.requestHandler.request(`/skyblock/auction?${filter}=${query}`, options);
    if (res.options.raw) return res;
    return res.data.auctions.map((a: any) => new Auction(a, options?.includeItemBytes ?? false));
  }
}

export default getSkyblockAction;
