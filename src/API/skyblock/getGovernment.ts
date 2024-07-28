import GovernmentData from '../../structures/SkyBlock/Static/Government.js';
export default async function (this: any) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/resources/skyblock/election');
  if (res.raw) return res;
  return new GovernmentData(res);
}
