import Auction from '../structures/SkyBlock/Auctions/Auction.js';
import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import Error from '../Private/ErrorHandler.js';
import { AuctionRequestOptions } from './API.js';
import { RequestData } from '../Private/RequestHandler.js';

class getSkyblockActionsByPlayer extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: AuctionRequestOptions): Promise<Auction[] | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID, 'Fetching Skyb,oock Auctions By Player');
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/skyblock/auction?player=${query}`, options);
    if (res.options.raw) return res;
    return res.data.auctions.map((a: any) => new Auction(a, options?.includeItemBytes ?? false));
  }
}

export default getSkyblockActionsByPlayer;
