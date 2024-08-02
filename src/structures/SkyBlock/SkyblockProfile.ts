import SkyblockMember from './SkyblockMember';

/**
 * Skyblock Profile class
 */
class SkyblockProfile {
  profileId: string;
  profileName: string;
  gameMode: string | null;
  banking: object;
  communityUpgrades: object;
  selected: boolean;
  members: SkyblockMember[];
  me: SkyblockMember | undefined;
  constructor(data: Record<string, any>) {
    this.profileId = data.profileId;
    this.profileName = data.profileName;
    this.gameMode = data.gameMode;
    this.banking = data.banking;
    this.communityUpgrades = data.communityUpgrades;
    this.selected = data.selected;
    this.members = Object.keys(data.members).map(
      (uuid) =>
        new SkyblockMember({
          uuid: uuid,
          profileId: this.profileId,
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
  /**
   * Profile Name
   * @return {string}
   */
  toString() {
    return this.profileName;
  }
}

export default SkyblockProfile;
