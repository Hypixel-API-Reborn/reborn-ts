import Challenges from '../structures/Static/Challenges';
export default async function (this: any) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/resources/challenges');
  if (res.raw) return res;
  return new Challenges(res);
}
