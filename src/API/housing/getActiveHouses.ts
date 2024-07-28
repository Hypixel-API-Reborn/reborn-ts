import House from '../../structures/House';
export default async function (this: any) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/housing/active');
  if (res.raw) return res;
  return res.length ? res.map((b: any) => new House(b)) : [];
}
