import House from '../../structures/House';
import Errors from '../../Errors';
export default async function (this: any, query: string) {
  if (!query) throw new Error(Errors.NO_UUID);
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/housing/house?house=${query}`);
  if (res.raw) return res;
  return new House(res);
}
