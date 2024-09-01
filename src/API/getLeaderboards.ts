import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import Leaderboard from '../structures/Leaderboard';
import { RequestOptions } from '../Private/Requests';

class getLeaderboards extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<Record<string, Leaderboard[]>> {
    const res = await this.client.requests.request('/leaderboards', options);
    if (res.options.raw) return res.data;
    if (!res.data.leaderboards) {
      throw new Error(this.client.errors.SOMETHING_WENT_WRONG.replace(/{cause}/, 'Try again.'));
    }
    const leaderboards: Record<string, Leaderboard[]> = {};
    Object.keys(res.data.leaderboards).forEach((key) => {
      leaderboards[key] = res.data.leaderboards[key].map((l: Record<string, any>) => new Leaderboard(l));
    });
    return leaderboards;
  }
}

export default getLeaderboards;
