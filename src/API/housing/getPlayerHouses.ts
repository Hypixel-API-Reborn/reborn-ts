import House from '../../structures/House';
import toUuid from '../../utils/toUuid';
import Errors from '../../Errors';
export default async function (this: any, query: string) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/housing/houses?player=${query}`);
  if (res.raw) return res;
  return res.length ? res.map((h: any) => new House(h)) : [];
}
