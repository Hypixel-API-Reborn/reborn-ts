import Auction from '../structures/SkyBlock/Auctions/Auction';
import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import { AuctionRequestOptions } from './API';
import { RequestData } from '../Private/RequestHandler';

class getSkyblockActionsByPlayer extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: AuctionRequestOptions): Promise<Auction[] | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/skyblock/auction?player=${query}`, options);
    if (res.options.raw) return res;
    return res.data.auctions.map((a: any) => new Auction(a, options?.includeItemBytes ?? false));
  }
}

export default getSkyblockActionsByPlayer;
