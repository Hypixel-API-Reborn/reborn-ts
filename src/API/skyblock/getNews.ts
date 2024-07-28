import SkyblockNews from '../../structures/SkyBlock/News/SkyblockNews';
export default async function (this: any) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/skyblock/news');
  if (res.raw) return res;
  return res.items.map((i: any) => new SkyblockNews(i));
}
