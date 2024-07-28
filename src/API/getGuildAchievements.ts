import GuildAchievements from '../structures/Static/GuildAchievements';
export default async function (this: any) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/resources/guilds/achievements');
  if (res.raw) return res;
  return new GuildAchievements(res);
}
