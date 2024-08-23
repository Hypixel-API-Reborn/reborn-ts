import SkyblockMember from '../../structures/SkyBlock/SkyblockMember';
import { SkyblockRequestOptions } from '../API';
import Endpoint from '../../Private/Endpoint';
import Client from '../../Client';

class getMember extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: SkyblockRequestOptions): Promise<Map<string, SkyblockMember>> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/skyblock/profiles?uuid=${query}`, options);
    if (res.options.raw) return res.data;
    if (!res.data.profiles || !res.data.profiles.length) throw new Error(this.client.errors.NO_SKYBLOCK_PROFILES);
    const memberByProfileName = new Map();
    for (const profile of res.data.profiles) {
      memberByProfileName.set(
        profile.cute_name,
        new SkyblockMember({
          uuid: query,
          profileId: profile.profile_id,
          garden: options?.garden ? await this.client.skyblock.getGarden(profile.profile_id) : null,
          museum: options?.garden ? await this.client.skyblock.getMuseum(query, profile.profile_id) : null,
          profileName: profile.cute_name,
          gameMode: profile.game_mode || null,
          m: profile.members[query],
          banking: profile.banking,
          communityUpgrades: profile.community_upgrades,
          selected: profile.selected
        })
      );
    }
    return memberByProfileName;
  }
}

export default getMember;
