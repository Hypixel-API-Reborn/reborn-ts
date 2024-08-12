import SkyblockProfile from '../structures/SkyBlock/SkyblockProfile';
import Endpoint from '../Private/Endpoint';
import toUuid from '../utils/toUuid';
import Errors from '../Errors';
import Client from '../Client';
export default class getSkyblockProfiles extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string): Promise<SkyblockProfile[]> {
    if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
    query = await toUuid(query);
    const res = await this.client.requests.request(`/skyblock/profiles?uuid=${query}`);
    if (res.raw) return res;
    if (!res.profiles || !res.profiles.length) throw new Error(Errors.NO_SKYBLOCK_PROFILES);

    const profiles = [];
    for (let i = 0; i < res.profiles.length; i++) {
      profiles.push({
        uuid: query,
        profileId: res.profiles[i].profile_id,
        profileName: res.profiles[i].cute_name,
        gameMode: res.profiles[i].game_mode || null,
        m: res.profiles[i].members[query],
        banking: res.profiles[i].banking,
        communityUpgrades: res.profiles[i].community_upgrades,
        museum: null,
        garden: null,
        selected: res.profiles[i].selected,
        members: res.profiles[i].members
      });
    }

    return profiles.map((p) => new SkyblockProfile(p));
  }
}
