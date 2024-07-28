import RecentGame from '../structures/RecentGame';
import toUuid from '../utils/toUuid';
import Errors from '../Errors';
export default async function (this: any, query: string) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/recentgames?uuid=${query}`);
  if (res.raw) return res;
  if (0 === res.games.length) {
    return [];
  }
  return res.games.map((x: any) => new RecentGame(x));
}
