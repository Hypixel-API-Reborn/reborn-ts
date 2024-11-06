import ZombiesStats from './ZombiesStats.js';
import divide from '../../../utils/divide.js';
import { removeSnakeCaseString } from '../../../utils/removeSnakeCase.js';

class Zombies {
  overall: ZombiesStats;
  deadEnd: ZombiesStats;
  badBlood: ZombiesStats;
  alienArcadium: ZombiesStats;
  prison: ZombiesStats;
  killsByZombie: Record<string, number>;
  bulletsHit: number;
  bulletsShot: number;
  gunAccuracy: number;
  headshots: number;
  headshotAccuracy: number;
  constructor(data: Record<string, any>) {
    this.overall = new ZombiesStats(data);
    this.deadEnd = new ZombiesStats(data, 'deadend');
    this.badBlood = new ZombiesStats(data, 'badblood');
    this.alienArcadium = new ZombiesStats(data, 'alienarcadium');
    this.prison = new ZombiesStats(data, 'prison');
    this.killsByZombie = this.parseZombiesKills(data);
    this.bulletsHit = data?.bullets_hit_zombies || 0;
    this.bulletsShot = data?.bullets_shot_zombies || 0;
    this.gunAccuracy = divide(this.bulletsHit, this.bulletsShot);
    this.headshots = data?.headshots_zombies || 0;
    this.headshotAccuracy = divide(this.headshots, this.bulletsShot);
  }
  private parseZombiesKills(data: Record<string, any>): Record<string, number> {
    const matches = Array.from(Object.keys(data))
      .map((x) => x.match(/^([A-Za-z]+)_zombie_kills_zombies$/))
      .filter((x) => x);
    // From entries might be broken
    return Object.fromEntries(matches.map((x: any) => [removeSnakeCaseString(x[1]), data[x[0]]]));
  }
}

export default Zombies;
