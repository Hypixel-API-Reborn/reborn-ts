import Quests from '../structures/Static/Quests';
export default async function (this: any) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/resources/quests');
  if (res.raw) return res;
  return new Quests(res);
}
