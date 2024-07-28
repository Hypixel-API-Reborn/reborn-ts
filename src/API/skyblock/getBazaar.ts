import Product from '../../structures/SkyBlock/Bazzar/Product';
export default async function (this: any) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/skyblock/bazaar');
  if (res.raw) return res;
  const productsKeys = Object.keys(res.products);
  return productsKeys.map((x) => new Product(res.products[x]));
}
