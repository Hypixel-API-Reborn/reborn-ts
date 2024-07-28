import GameCounts from '../structures/GameCounts';
export default async function (this: any) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/counts');
  if (res.raw) return res;
  return new GameCounts(res);
}
