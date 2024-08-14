import SkyblockMember from '../structures/SkyBlock/SkyblockMember';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

export default class getSkyblockMember extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string): Promise<Map<string, SkyblockMember>> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requests.toUUID(query);
    const res = await this.client.requests.request(`/skyblock/profiles?uuid=${query}`);
    if (res.raw) return res;
    if (!res.profiles || !res.profiles.length) throw new Error(this.client.errors.NO_SKYBLOCK_PROFILES);
    const memberByProfileName = new Map();
    for (const profile of res.profiles) {
      memberByProfileName.set(
        profile.cute_name,
        new SkyblockMember({
          uuid: query,
          profileId: profile.profile_id,
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
