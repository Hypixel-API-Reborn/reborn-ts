import { CommunityUpgradesUpgrades } from './Types';

class Upgrade {
  upgrade: CommunityUpgradesUpgrades;
  startedTimestamp: number;
  startedAt: Date;
  constructor(data: Record<string, any>) {
    this.upgrade = data.upgrade;
    this.startedTimestamp = data.started_ms;
    this.startedAt = new Date(this.startedTimestamp);
  }
}

class Upgraded extends Upgrade {
  tier: number;
  startedBy: number;
  claimedTimestamp: number;
  claimedAt: Date;
  claimedBy: number;
  fasttracked: boolean;
  constructor(data: Record<string, any>) {
    super(data);
    this.tier = data.tier;
    this.startedBy = data.started_by;
    this.claimedTimestamp = data.claimed_ms;
    this.claimedAt = new Date(this.claimedTimestamp);
    this.claimedBy = data.claimed_by;
    this.fasttracked = data.fasttracked || false;
  }
}

class Upgrading extends Upgrade {
  tier: number;
  startedBy: number;
  constructor(data: Record<string, any>) {
    super(data);
    this.tier = data.new_tier;
    this.startedBy = data.who_started;
  }
}

class CommunityUpgrades {
  currentlyUpgrading: Upgrading | null;
  upgrades: Upgraded[];
  constructor(data: Record<string, any>) {
    this.currentlyUpgrading = data.currently_upgrading ? new Upgrading(data.currently_upgrading) : null;
    this.upgrades = [];
    data.upgrade_states.forEach((upgrade: Record<string, any>) => {
      this.upgrades.push(new Upgraded(upgrade));
    });
  }
}

export default CommunityUpgrades;
