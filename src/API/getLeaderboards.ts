import Leaderboard from '../structures/Leaderboard';
import Constants from '../utils/Constants';
import Endpoint from '../Private/Endpoint';
import Errors from '../Errors';
import Client from '../Client';
export default class getLeaderboards extends Endpoint {
  readonly client: Client;
  readonly name: string;
  constructor(client: Client) {
    super(client);
    this.client = client;
    this.name = 'getLeaderboards';
  }

  async execute() {
    const res = await this.client.requests.request('/leaderboards');
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
}
