import FireSale from '../../structures/SkyBlock/Static/FireSale';
export default async function (this: any) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/skyblock/firesales');
  if (res.raw) return res;
  return res.sales.length ? res.sales.map((a: any) => new FireSale(a)) : [];
}
