import Auction from '../structures/SkyBlock/Auctions/Auction';
import { AuctionRequestOptions } from './API';
import Error from '../Private/ErrorHandler';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

class getSkyblockActionsByPlayer extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: AuctionRequestOptions): Promise<Auction[]> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID, 'Fetching Skyb,oock Auctions By Player');
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/skyblock/auction?player=${query}`);
    if (res.options.raw) return res.data;
    return res.data.auctions.map((a: any) => new Auction(a, options?.includeItemBytes ?? false));
  }
}

export default getSkyblockActionsByPlayer;
