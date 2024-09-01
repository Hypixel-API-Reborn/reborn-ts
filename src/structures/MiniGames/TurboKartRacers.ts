export class TurboKartRacersMap {
  map: string;
  plays: number;
  boxPickups: number;
  bronzeTrophies: number;
  silverTrophies: number;
  goldTrophies: number;
  constructor(data: Record<string, any>, mapName: string) {
    this.map = mapName;
    this.plays = data?.[`${mapName}_plays`] || 0;
    this.boxPickups = data?.[`box_pickups_${mapName}`] || 0;
    this.bronzeTrophies = data?.[`bronze_trophy_${mapName}`] || 0;
    this.silverTrophies = data?.[`silver_trophy_${mapName}`] || 0;
    this.goldTrophies = data?.[`gold_trophy_${mapName}`] || 0;
  }
}

class TurboKartRacers {
  coins: number;
  wins: number;
  completedLaps: number;
  bronzeTrophies: number;
  silverTrophies: number;
  goldTrophies: number;
  boxPickups: number;
  horn: 'DEFAULT' | 'SHY' | 'ALIEN' | 'TAXI' | 'KLAXON' | 'TRICYCLE' | 'ALARM' | 'KLOON' | 'TEDDY' | 'TRUCK' | 'JERRY';
  retro: TurboKartRacersMap;
  hypixelgp: TurboKartRacersMap;
  olympus: TurboKartRacersMap;
  junglerush: TurboKartRacersMap;
  canyon: TurboKartRacersMap;
  bananaHitsReceived: number;
  bananaHitsSent: number;
  blueTorpedoHit: number;
  grandPrix: boolean;
  grandPrixTokens: number;
  constructor(data: Record<string, any>) {
    this.coins = data?.coins || 0;
    this.wins = data?.wins || 0;
    this.completedLaps = data?.laps_completed || 0;
    this.bronzeTrophies = data?.bronze_trophy || 0;
    this.silverTrophies = data?.silver_trophy || 0;
    this.goldTrophies = data?.gold_trophy || 0;
    this.boxPickups = data?.box_pickups || 0;
    this.horn = data?.horn || 'DEFAULT';
    this.retro = new TurboKartRacersMap(data, 'retro');
    this.hypixelgp = new TurboKartRacersMap(data, 'hypixelgp');
    this.olympus = new TurboKartRacersMap(data, 'olympus');
    this.junglerush = new TurboKartRacersMap(data, 'junglerush');
    this.canyon = new TurboKartRacersMap(data, 'canyon');
    this.bananaHitsReceived = data?.banana_hits_received || 0;
    this.bananaHitsSent = data?.banana_hits_sent || 0;
    this.blueTorpedoHit = data?.blue_torpedo_hit || 0;
    this.grandPrix = data?.grand_prix || 'false';
    this.grandPrixTokens = data?.grand_prix_tokens || 0;
  }
}

export default TurboKartRacers;
