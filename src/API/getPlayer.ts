import Errors from '../Errors';
import toUuid from '../utils/toUuid';
import getGuild from './getGuild';
import getRecentGames from './getRecentGames';
import Player from '../structures/Player';
export default async function (this: any, query: string, options = { guild: false, recentGames: false }) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/player?uuid=${query}`);
  if (res.raw) return res;
  if (query && !res.player) throw new Error(Errors.PLAYER_HAS_NEVER_LOGGED);
  let guild = null;
  let recentGames = null;
  if (options.guild) {
    guild = getGuild.call(this, 'player', query);
  }
  if (options.recentGames) {
    recentGames = getRecentGames.call(this, query);
  }
  [guild, recentGames] = await Promise.all([guild, recentGames]);
  return new Player(res.player, { guild, recentGames });
}
