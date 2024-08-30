import divide from '../../utils/divide';

export class WarlordsClass {
  wins: number;
  losses: number;
  WLRatio: number;
  gamesPlayed: number;
  damage: number;
  heal: number;
  damagePrevented: number;
  constructor(data: Record<string, any>, className: string) {
    this.wins = data[`wins_${className}`] || 0;
    this.losses = data[`losses_${className}`] || 0;
    this.WLRatio = divide(this.wins, this.losses);
    this.gamesPlayed = data[`${className}_plays`] || 0;
    this.damage = data[`damage_${className}`] || 0;
    this.heal = data[`heal_${className}`] || 0;
    this.damagePrevented = data[`damage_prevented_${className}`] || 0;
  }
}

class Warlords {
  coins: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  wins: number;
  losses: number;
  WLRatio: number;
  winstreak: number;
  assists: number;
  class: string;
  pyromancer: WarlordsClass;
  mage: WarlordsClass;
  thunderlord: WarlordsClass;
  shaman: WarlordsClass;
  earthwarden: WarlordsClass;
  aquamancer: WarlordsClass;
  paladin: WarlordsClass;
  avenger: WarlordsClass;
  warrior: WarlordsClass;
  defender: WarlordsClass;
  cryomancer: WarlordsClass;
  crusader: WarlordsClass;
  berserker: WarlordsClass;
  protector: WarlordsClass;
  revenant: WarlordsClass;
  spiritguard: WarlordsClass;
  constructor(data: Record<string, any>) {
    this.coins = data.coins || 0;
    this.kills = data.kills || 0;
    this.deaths = data.deaths || 0;
    this.KDRatio = divide(this.kills, this.deaths);
    this.wins = data.wins || 0;
    this.losses = data.losses || 0;
    this.WLRatio = divide(this.wins, this.losses);
    this.winstreak = data.win_streak || 0;
    this.assists = data.assists || 0;
    this.class = data.chosen_class || '';
    this.pyromancer = new WarlordsClass(data, 'pyromancer');
    this.mage = new WarlordsClass(data, 'mage');
    this.thunderlord = new WarlordsClass(data, 'thunderlord');
    this.shaman = new WarlordsClass(data, 'shaman');
    this.earthwarden = new WarlordsClass(data, 'earthwarden');
    this.aquamancer = new WarlordsClass(data, 'aquamancer');
    this.paladin = new WarlordsClass(data, 'paladin');
    this.avenger = new WarlordsClass(data, 'avenger');
    this.warrior = new WarlordsClass(data, 'warrior');
    this.defender = new WarlordsClass(data, 'defender');
    this.cryomancer = new WarlordsClass(data, 'cryomancer');
    this.crusader = new WarlordsClass(data, 'crusader');
    this.berserker = new WarlordsClass(data, 'berserker');
    this.protector = new WarlordsClass(data, 'protector');
    this.revenant = new WarlordsClass(data, 'revenant');
    this.spiritguard = new WarlordsClass(data, 'spiritguard');
  }
}

export default Warlords;
