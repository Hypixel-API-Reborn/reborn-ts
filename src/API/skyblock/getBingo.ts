import BingoData from '../../structures/SkyBlock/Static/BingoData';
export default async function (this: any) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/resources/skyblock/bingo');
  if (res.raw) return res;
  return new BingoData(res);
}
