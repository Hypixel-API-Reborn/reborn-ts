import Leaderboard from '../structures/Leaderboard';
import Constants from '../utils/Constants';
import Errors from '../Errors';
export default async function (this: any) {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/leaderboards');
  if (res.raw) return res;
  if (!res.leaderboards) throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, 'Try again.'));
  const lbnames = Object.create(Constants.leaderboardNames);
  for (const name in lbnames) {
    lbnames[name] = res.leaderboards[lbnames[name]].length
      ? res.leaderboards[lbnames[name]].map((lb: any) => new Leaderboard(lb))
      : [];
  }
  return lbnames;
}
