import SkyblockProfile from '../structures/SkyBlock/SkyblockProfile';
import { SkyblockRequestOptions } from './API';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

class getSkyblockProfiles extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: SkyblockRequestOptions): Promise<SkyblockProfile[]> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/skyblock/profiles?uuid=${query}`, options);
    if (res.raw) return res;
    if (!res.profiles || !res.profiles.length) throw new Error(this.client.errors.NO_SKYBLOCK_PROFILES);
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

export default getSkyblockProfiles;
