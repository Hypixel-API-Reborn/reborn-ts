import Banking from './Banking';
import CommunityUpgrades from './CommunityUpgrades';
import SkyblockGarden from '../SkyblockGarden';
import SkyblockMember from '../Member/Member';
import { SkyblockProfileName } from './Types';

class SkyblockProfile {
  profileId: string;
  profileName: SkyblockProfileName;
  gameMode: string | null;
  banking: Banking;
  garden: SkyblockGarden | null;
  communityUpgrades: CommunityUpgrades;
  selected: boolean;
  members: SkyblockMember[];
  me: SkyblockMember | undefined;
  constructor(data: Record<string, any>) {
    this.profileId = data.profileId || '';
    this.profileName = data.profileName || '';
    this.gameMode = data.gameMode || null;
    this.banking = new Banking(data.banking || {});
    this.garden = data.garden || null;
    this.communityUpgrades = new CommunityUpgrades(data.communityUpgrades || {});
    this.selected = data.selected || false;
    this.members = Object.keys(data.members).map(
      (uuid) =>
        new SkyblockMember({
          uuid: uuid,
          profileId: this.profileId,
          garden: null,
          museum: null,
          profileName: this.profileName,
          gameMode: this.gameMode,
          m: data.members[uuid],
          banking: this.banking,
          communityUpgrades: this.communityUpgrades,
          selected: this.selected
        })
    );
    this.me = this.members.find((x) => x.uuid === data.uuid);
  }

  toString(): string {
    return this.profileId;
  }
}

export default SkyblockProfile;
