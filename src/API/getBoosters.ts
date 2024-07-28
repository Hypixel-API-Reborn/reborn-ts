import Booster from '../structures/Boosters/Booster';
export default async function (this: any) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/boosters');
  if (res.raw) return res;
  return res.boosters.length ? res.boosters.map((b: any) => new Booster(b)).reverse() : [];
}
