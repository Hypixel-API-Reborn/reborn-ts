import CopsAndCrimsDeathmatch from './CopsAndCrimsDeathmatch.js';
import CopsAndCrimsDefusal from './CopsAndCrimsDefusal.js';
import CopsAndCrimsGunGame from './CopsAndCrimsGunGame.js';
import divide from '../../../utils/divide.js';

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
    this.coins = data?.coins || data?.tokens || 0;
    this.kills = this.defusal.kills + this.deathmath.kills + this.gunGame.kills;
    this.assists = this.defusal.assists + this.deathmath.assists + this.gunGame.assists;
    this.deaths = this.defusal.deaths + this.deathmath.deaths + this.gunGame.deaths;
    this.KDR = divide(this.kills, this.deaths);
    this.wins = this.defusal.wins + this.deathmath.wins + this.gunGame.wins;
    this.gamesPlayed = this.defusal.gamesPlayed + this.deathmath.gamesPlayed + this.gunGame.gamesPlayed;
    this.losses = this.gamesPlayed - this.wins;
    this.WLR = divide(this.wins, this.losses);
    this.killsAsCrim = this.defusal.killsAsCrim + this.deathmath.killsAsCrim + this.gunGame.killsAsCrim;
    this.killsAsCop = this.defusal.killsAsCop + this.deathmath.killsAsCop + this.gunGame.killsAsCop;
    this.prefixColor = data?.lobbyPrefixColor || '';
    this.showPrefix = data?.show_lobby_prefix || false;
    this.selectedPrefix = data?.selected_lobby_prefix || '';
    this.killsInPrefix = data?.show_kills_in_prefix || false;
  }
}

export default CopsAndCrims;
