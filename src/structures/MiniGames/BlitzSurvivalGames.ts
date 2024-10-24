import divide from '../../utils/divide.js';

export class BlitzSGKit {
  level: number;
  exp: number;
  kills: number;
  deaths: number;
  KDR: number;
  wins: number;
  gamesPlayed: number;
  losses: number;
  WLR: number;
  arrowsShot: number;
  arrowsHit: number;
  bowAccuracy: number;
  damage: number;
  damageTaken: number;
  potionsDrunk: number;
  potionsThrown: number;
  playTime: number;
  mobsSpawned: number;
  chestsOpened: number;
  constructor(data: Record<string, any>, kitName: string) {
    this.level = data?.[kitName] || 0;
    this.exp = data?.[`exp_${kitName}`] || 0;
    this.kills = data?.[`kills_${kitName}`] || 0;
    this.deaths = data?.[`deaths_${kitName}`] || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = data?.[`wins_${kitName}`] || 0;
    this.gamesPlayed = data?.[`games_played_${kitName}`] || 0;
    this.losses = this.gamesPlayed - this.wins;
    this.WLR = divide(this.wins, this.losses);
    this.arrowsShot = data?.[`arrows_fired_${kitName}`] || 0;
    this.arrowsHit = data?.[`arrows_hit_${kitName}`] || 0;
    this.bowAccuracy = divide(this.arrowsHit, this.arrowsShot);
    this.damage = data?.[`damage_${kitName}`] || 0;
    this.damageTaken = data?.[`damage_taken_${kitName}`] || 0;
    this.potionsDrunk = data?.[`potions_drunk_${kitName}`] || 0;
    this.potionsThrown = data?.[`potions_thrown_${kitName}`] || 0;
    this.playTime = data?.[`time_played_${kitName}`] || 0;
    this.mobsSpawned = data?.[`mobs_spawned_${kitName}`] || 0;
    this.chestsOpened = data?.[`chests_opened_${kitName}`] || 0;
  }
}

class BlitzSurvivalGames {
  coins: number;
  kills: number;
  kit: string;
  killsSolo: number;
  killsTeams: number;
  deaths: number;
  KDR: number;
  wins: number;
  winsSolo: number;
  winsTeam: number;
  gamesPlayed: number;
  losses: number;
  WLR: number;
  arrowsShot: number;
  arrowsHit: number;
  bowAccuracy: number;
  damage: number;
  damageTaken: number;
  potionsDrunk: number;
  potionsThrown: number;
  mobsSpawned: number;
  playTime: number;
  blitzUses: number;
  chestsOpened: number;
  archer: BlitzSGKit;
  meatmaster: BlitzSGKit;
  speleologist: BlitzSGKit;
  baker: BlitzSGKit;
  knight: BlitzSGKit;
  guardian: BlitzSGKit;
  scout: BlitzSGKit;
  hunter: BlitzSGKit;
  hypeTrain: BlitzSGKit;
  fisherman: BlitzSGKit;
  armorer: BlitzSGKit;
  horsetamer: BlitzSGKit;
  astronaut: BlitzSGKit;
  troll: BlitzSGKit;
  reaper: BlitzSGKit;
  shark: BlitzSGKit;
  reddragon: BlitzSGKit;
  toxicologist: BlitzSGKit;
  rogue: BlitzSGKit;
  warlock: BlitzSGKit;
  slimeyslime: BlitzSGKit;
  jockey: BlitzSGKit;
  golem: BlitzSGKit;
  viking: BlitzSGKit;
  shadowKnight: BlitzSGKit;
  pigman: BlitzSGKit;
  paladin: BlitzSGKit;
  necromancer: BlitzSGKit;
  florist: BlitzSGKit;
  diver: BlitzSGKit;
  arachnologist: BlitzSGKit;
  blaze: BlitzSGKit;
  wolftamer: BlitzSGKit;
  tim: BlitzSGKit;
  farmer: BlitzSGKit;
  creepertamer: BlitzSGKit;
  snowman: BlitzSGKit;
  constructor(data: Record<string, any>) {
    this.coins = data?.coins || data?.tokens || 0;
    this.kills = data?.kills || 0;
    this.kit = data?.defaultkit || '';
    this.killsSolo = data?.kills_solo_normal || 0;
    this.killsTeams = data?.kills_teams_normal || 0;
    this.deaths = data?.deaths || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = data?.wins || 0;
    this.winsSolo = data?.wins_solo_normal || 0;
    this.winsTeam = data?.wins_teams || 0;
    this.gamesPlayed = data?.games_played || 0;
    this.losses = this.gamesPlayed - this.wins;
    this.WLR = divide(this.wins, this.losses);
    this.arrowsShot = data?.arrows_fired || 0;
    this.arrowsHit = data?.arrows_hit || 0;
    this.bowAccuracy = divide(this.arrowsHit, this.arrowsShot);
    this.damage = data?.damage || 0;
    this.damageTaken = data?.damage_taken || 0;
    this.potionsDrunk = data?.potions_drunk || 0;
    this.potionsThrown = data?.potions_thrown || 0;
    this.mobsSpawned = data?.mobs_spawned || 0;
    this.playTime = data?.time_played || 0;
    this.blitzUses = data?.blitz_uses || 0;
    this.chestsOpened = data?.chests_opened || 0;
    this.archer = new BlitzSGKit(data, 'archer');
    this.meatmaster = new BlitzSGKit(data, 'meatmaster');
    this.speleologist = new BlitzSGKit(data, 'speleologist');
    this.baker = new BlitzSGKit(data, 'baker');
    this.knight = new BlitzSGKit(data, 'knight');
    this.guardian = new BlitzSGKit(data, 'guardian');
    this.scout = new BlitzSGKit(data, 'scout');
    this.hunter = new BlitzSGKit(data, 'hunter');
    this.hypeTrain = new BlitzSGKit(data, 'hype train');
    this.fisherman = new BlitzSGKit(data, 'fisherman');
    this.armorer = new BlitzSGKit(data, 'armorer');
    this.horsetamer = new BlitzSGKit(data, 'horsetamer');
    this.astronaut = new BlitzSGKit(data, 'astronaut');
    this.troll = new BlitzSGKit(data, 'troll');
    this.reaper = new BlitzSGKit(data, 'reaper');
    this.shark = new BlitzSGKit(data, 'shark');
    this.reddragon = new BlitzSGKit(data, 'reddragon');
    this.toxicologist = new BlitzSGKit(data, 'toxicologist');
    this.rogue = new BlitzSGKit(data, 'rogue');
    this.warlock = new BlitzSGKit(data, 'warlock');
    this.slimeyslime = new BlitzSGKit(data, 'slimeyslime');
    this.jockey = new BlitzSGKit(data, 'jockey');
    this.golem = new BlitzSGKit(data, 'golem');
    this.viking = new BlitzSGKit(data, 'viking');
    this.shadowKnight = new BlitzSGKit(data, 'shadow knight');
    this.pigman = new BlitzSGKit(data, 'pigman');
    this.paladin = new BlitzSGKit(data, 'paladin');
    this.necromancer = new BlitzSGKit(data, 'necromancer');
    this.florist = new BlitzSGKit(data, 'florist');
    this.diver = new BlitzSGKit(data, 'diver');
    this.arachnologist = new BlitzSGKit(data, 'arachnologist');
    this.blaze = new BlitzSGKit(data, 'blaze');
    this.wolftamer = new BlitzSGKit(data, 'wolftamer');
    this.tim = new BlitzSGKit(data, 'tim');
    this.farmer = new BlitzSGKit(data, 'farmer');
    this.creepertamer = new BlitzSGKit(data, 'creepertamer');
    this.snowman = new BlitzSGKit(data, 'snowman');
  }
}

export default BlitzSurvivalGames;
