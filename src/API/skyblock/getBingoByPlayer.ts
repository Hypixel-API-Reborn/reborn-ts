import PlayerBingo from '../../structures/SkyBlock/PlayerBingo';
import toUuid from '../../utils/toUuid';
import getBingo from './getBingo';
import Errors from '../../Errors';
export default async function (this: any, query: string, { fetchBingoData = false }) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/skyblock/uuid?player=${query}`);
  if (res.raw) return res;
  let bingoData = null;
  if (fetchBingoData) bingoData = await getBingo.call(this);
  return new PlayerBingo(res, bingoData);
}
