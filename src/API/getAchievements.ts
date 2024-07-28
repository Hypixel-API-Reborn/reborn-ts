import Achievements from '../structures/Static/Achievements';
export default async function (this: any) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/resources/achievements');
  if (res.raw) return res;
  return new Achievements(res);
}
