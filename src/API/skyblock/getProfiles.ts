import SkyblockProfile from '../../structures/SkyBlock/SkyblockProfile';
import { SkyblockRequestOptions } from '../API';
import Endpoint from '../../Private/Endpoint';
import Client from '../../Client';

class getProfiles extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: SkyblockRequestOptions): Promise<SkyblockProfile[]> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/skyblock/profiles?uuid=${query}`, options);
    if (res.options.raw) return res.data;
    if (!res.data.profiles || !res.data.profiles.length) throw new Error(this.client.errors.NO_SKYBLOCK_PROFILES);
    const profiles = [];
    for (let i = 0; i < res.data.profiles.length; i++) {
      profiles.push({
        uuid: query,
        profileId: res.data.profiles[i].profile_id,
        profileName: res.data.profiles[i].cute_name,
        gameMode: res.data.profiles[i].game_mode || null,
        m: res.data.profiles[i].members[query],
        banking: res.data.profiles[i].banking,
        communityUpgrades: res.data.profiles[i].community_upgrades,
        selected: res.data.profiles[i].selected,
        members: res.data.profiles[i].members,
        garden: options?.garden ? await this.client.skyblock.getGarden(res.data.profiles[i].profile_id) : null,
        museum: options?.garden ? await this.client.skyblock.getMuseum(query, res.data.profiles[i].profile_id) : null
      });
    }
    return profiles.map((p) => new SkyblockProfile(p));
  }
}

export default getProfiles;
