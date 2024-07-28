import SkyblockMuseum from '../../structures/SkyBlock/SkyblockMuseum';
import toUuid from '../../utils/toUuid';
import Errors from '../../Errors';
export default async function (this: any, query: string, profileId: string) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/skyblock/museum?uuid=${query}&profile=${profileId}`);
  if (res.raw) return res;
  return new SkyblockMuseum({
    uuid: query,
    m: res,
    profileId: profileId
  });
}
