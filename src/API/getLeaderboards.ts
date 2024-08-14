import Leaderboard from '../structures/Leaderboard';
import Constants from '../utils/Constants';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getLeaderboards extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(): Promise<any> {
    const res = await this.client.requests.request('/leaderboards');
    if (res.raw) return res;
    if (!res.leaderboards) throw new Error(this.client.errors.SOMETHING_WENT_WRONG.replace(/{cause}/, 'Try again.'));
    const lbnames = Object.create(Constants.leaderboardNames);
    for (const name in lbnames) {
      lbnames[name] = res.leaderboards[lbnames[name]].length
        ? res.leaderboards[lbnames[name]].map((lb: any) => new Leaderboard(lb))
        : [];
    }
    return lbnames;
  }
}
