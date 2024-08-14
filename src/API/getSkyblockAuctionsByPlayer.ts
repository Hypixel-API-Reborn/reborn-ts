import Auction from '../structures/SkyBlock/Auctions/Auction';
import { AuctionRequestOptions } from './API';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getSkyblockActionsByPlayer extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: AuctionRequestOptions): Promise<Auction[]> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/skyblock/auction?player=${query}`);
    if (res.raw) return res;
    return res.auctions.length ? res.auctions.map((a: any) => new Auction(a, options?.includeItemBytes ?? false)) : [];
  }
}
