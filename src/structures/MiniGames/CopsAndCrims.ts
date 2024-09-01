import divide from '../../utils/divide';

export class CopsAndCrimsDefusal {
  kills: number;
  headshotKills: number;
  assists: number;
  deaths: number;
  KDR: number;
  wins: number;
  gamesPlayed: number;
  losses: number;
  WLR: number;
  roundWins: number;
  shotsFired: number;
  bombsDefused: number;
  bombsPlanted: number;
  killsAsCrim: number;
  killsAsCop: number;
  constructor(data: Record<string, any>) {
    this.kills = data?.kills || 0;
    this.headshotKills = data?.headshot_kills || 0;
    this.assists = data?.assists || 0;
    this.deaths = data?.deaths || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = data?.game_wins || 0;
    this.gamesPlayed = data?.game_plays || 0;
    this.losses = this.gamesPlayed - this.wins;
    this.WLR = divide(this.wins, this.losses);
    this.roundWins = data?.round_wins || 0;
    this.shotsFired = data?.shots_fired || 0;
    this.bombsDefused = data?.bombs_defused || 0;
    this.bombsPlanted = data?.bombs_planted || 0;
    this.killsAsCrim = data?.criminal_kills || 0;
    this.killsAsCop = data?.cop_kills || 0;
  }
}

export class CopsAndCrimsDeathmatch {
  kills: number;
  assists: number;
  deaths: number;
  KDR: number;
  wins: number;
  gamesPlayed: number;
  losses: number;
  WLR: number;
  killsAsCrim: number;
  killsAsCop: number;
  constructor(data: Record<string, any>) {
    this.kills = data?.kills_deathmatch || 0;
    this.assists = data?.assists_deathmatch || 0;
    this.deaths = data?.deaths_deathmatch || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = data?.game_wins_deathmatch || 0;
    this.gamesPlayed = data?.game_plays_deathmatch || 0;
    this.losses = this.gamesPlayed - this.wins;
    this.WLR = divide(this.wins, this.losses);
    this.killsAsCrim = data?.criminal_kills_deathmatch || 0;
    this.killsAsCop = data?.cop_kills_deathmatch || 0;
  }
}

export class CopsAndCrimsGunGame {
  kills: number;
  assists: number;
  deaths: number;
  KDR: number;
  wins: number;
  gamesPlayed: number;
  losses: number;
  WLR: number;
  killsAsCrim: number;
  killsAsCop: number;
  fastestWin: number;
  constructor(data: Record<string, any>) {
    this.kills = data?.kills_gungame || 0;
    this.assists = data?.assists_gungame || 0;
    this.deaths = data?.deaths_gungame || 0;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = data?.game_wins_gungame || 0;
    this.gamesPlayed = data?.game_plays_gungame || 0;
    this.losses = this.gamesPlayed - this.wins;
    this.WLR = divide(this.wins, this.losses);
    this.killsAsCrim = data?.criminal_kills_gungame || 0;
    this.killsAsCop = data?.cop_kills_gungame || 0;
    this.fastestWin = data?.fastest_win_gungame || 0;
  }
}

class CopsAndCrims {
  defusal: CopsAndCrimsDefusal;
  deathmath: CopsAndCrimsDeathmatch;
  gunGame: CopsAndCrimsGunGame;
  coins: number;
  kills: number;
  assists: number;
  deaths: number;
  KDR: number;
  wins: number;
  gamesPlayed: number;
  losses: number;
  WLR: number;
  killsAsCrim: number;
  killsAsCop: number;
  prefixColor: string;
  showPrefix: boolean;
  selectedPrefix: string;
  killsInPrefix: boolean;
  constructor(data: Record<string, any>) {
    this.defusal = new CopsAndCrimsDefusal(data);
    this.deathmath = new CopsAndCrimsDeathmatch(data);
    this.gunGame = new CopsAndCrimsGunGame(data);
    this.coins = data?.coins || 0;
    this.kills = this.defusal?.kills + this.deathmath?.kills + this.gunGame?.kills;
    this.assists = this.defusal?.assists + this.deathmath?.assists + this.gunGame?.assists;
    this.deaths = this.defusal?.deaths + this.deathmath?.deaths + this.gunGame?.deaths;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = this.defusal?.wins + this.deathmath?.wins + this.gunGame?.wins;
    this.gamesPlayed = this.defusal?.gamesPlayed + this.deathmath?.gamesPlayed + this.gunGame?.gamesPlayed;
    this.losses = this.gamesPlayed - this.wins;
    this.WLR = divide(this.wins, this.losses);
    this.killsAsCrim = this.defusal?.killsAsCrim + this.deathmath?.killsAsCrim + this.gunGame?.killsAsCrim;
    this.killsAsCop = this.defusal?.killsAsCop + this.deathmath?.killsAsCop + this.gunGame?.killsAsCop;
    this.prefixColor = data?.lobbyPrefixColor || '';
    this.showPrefix = data?.show_lobby_prefix || false;
    this.selectedPrefix = data?.selected_lobby_prefix || '';
    this.killsInPrefix = data?.show_kills_in_prefix || false;
  }
}

export default CopsAndCrims;
