import PartialAuction from '../structures/SkyBlock/Auctions/PartialAuction';
import AuctionInfo from '../structures/SkyBlock/Auctions/AuctionInfo';
import { AuctionRequestOptions } from './API';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getSkyblockEndedAuctions extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: AuctionRequestOptions): Promise<{ info: AuctionInfo; auctions: PartialAuction[] }> {
    const res = await this.client.requests.request('/skyblock/auctions_ended', options);
    if (res.raw) return res;
    return {
      info: new AuctionInfo({ ...res, totalAuctions: res.auctions.length, totalPages: 1 }),
      auctions: res.auctions.length
        ? res.auctions.map((a: any) => new PartialAuction(a, options?.includeItemBytes ?? false))
        : []
    };
  }
}
