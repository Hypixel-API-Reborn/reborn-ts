import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import SkyblockMember from '../structures/SkyBlock/Member/Member';
import { SkyblockRequestOptions } from './API';

class getSkyblockMember extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: SkyblockRequestOptions): Promise<Map<string, SkyblockMember>> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/skyblock/profiles?uuid=${query}`, options);
    if (res.options.raw) return res.data;
    if (!res.data.profiles || !res.data.profiles.length) throw new Error(this.client.errors.NO_SKYBLOCK_PROFILES);
    const memberByProfileName = new Map();
    for (const profile of res.data.profiles) {
      memberByProfileName.set(
        profile.cute_name,
        new SkyblockMember({
          uuid: query,
          profileId: profile.profile_id,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          garden: options?.garden ? await this.client.getSkyblockGarden(profile.profile_id) : null,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          museum: options?.museum ? await this.client.getSkyblockMuseum(query, profile.profile_id) : null,
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

export default getSkyblockMember;
