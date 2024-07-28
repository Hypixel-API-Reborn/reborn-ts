import Auction from '../../structures/SkyBlock/Auctions/Auction';
import toUuid from '../../utils/toUuid';
import Errors from '../../Errors';
export default async function (this: any, query: string, includeItemBytes = false) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/skyblock/auction?player=${query}`);
  if (res.raw) return res;
  return res.auctions.length ? res.auctions.map((a: any) => new Auction(a, includeItemBytes)) : [];
}
