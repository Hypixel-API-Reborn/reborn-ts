import SkyblockGarden from '../../structures/SkyBlock/SkyblockGarden';
export default async function (this: any, profileId: string) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/skyblock/garden?profile=${profileId}`);
  if (res.raw) return res;
  return new SkyblockGarden(res);
}
