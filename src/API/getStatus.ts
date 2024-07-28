import Status from '../structures/Status';
import toUuid from '../utils/toUuid';
export default async function (this: any, query: string) {
  query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/status?uuid=${query}`);
  if (res.raw) return res;
  return new Status(res.session);
}
