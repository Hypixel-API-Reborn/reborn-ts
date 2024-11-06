import divide from '../../../utils/divide.js';

class SheepWars {
  wins: number;
  kills: number;
  killsVoid: number;
  killsBow: number;
  killsExplosive: number;
  deaths: number;
  deathsVoid: number;
  deathsMelee: number;
  deathsExplosive: number;
  KDRatio: number;
  losses: number;
  WLRatio: number;
  gamesPlayed: number;
  damageDealt: number;
  sheepThrown: number;
  magicWoolHit: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.stats?.wins || 0;
    this.kills = data?.stats?.kills || 0;
    this.killsVoid = data?.stats?.kills_void || 0;
    this.killsBow = data?.stats?.kills_bow || 0;
    this.killsExplosive = data?.stats?.kills_explosive || 0;
    this.deaths = data?.stats?.deaths || 0;
    this.deathsVoid = data?.stats?.deaths_void || 0;
    this.deathsMelee = data?.stats?.deaths_melee || 0;
    this.deathsExplosive = data?.stats?.deaths_explosive || 0;
    this.KDRatio = divide(this.wins, this.deaths);
    this.losses = data?.stats?.losses || 0;
    this.WLRatio = divide(this.wins, this.losses);
    this.gamesPlayed = data?.stats?.games_played || 0;
    this.damageDealt = data?.stats?.damage_dealt || 0;
    this.sheepThrown = data?.stats?.sheep_thrown || 0;
    this.magicWoolHit = data?.stats?.magic_wool_hit || 0;
  }
}

export default SheepWars;
