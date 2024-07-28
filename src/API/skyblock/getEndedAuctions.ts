import PartialAuction from '../../structures/SkyBlock/Auctions/PartialAuction';
import AuctionInfo from '../../structures/SkyBlock/Auctions/AuctionInfo';
export default async function (this: any, includeItemBytes = false) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/skyblock/auctions_ended', false);
  if (res.raw) return res;
  return {
    info: new AuctionInfo({ ...res, totalAuctions: res.auctions.length, totalPages: 1 }),
    auctions: res.auctions.length ? res.auctions.map((a: any) => new PartialAuction(a, includeItemBytes)) : []
  };
}
