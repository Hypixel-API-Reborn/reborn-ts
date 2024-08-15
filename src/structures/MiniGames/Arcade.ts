// IMPORTANT : a lot of the properties from the API seem to be nonsense

import { removeSnakeCaseString } from '../../utils/removeSnakeCase';
import { weekAB, monthAB } from '../../utils/oscillation';
import Divide from '../../utils/Divide';

function parseZombiesKills(data: Record<string, any>): Record<string, number> {
  const matches = Array.from(Object.keys(data))
    .map((x) => x.match(/^([A-Za-z]+)_zombie_kills_zombies$/))
    .filter((x) => x);
  // From entries might be broken
  return Object.fromEntries(matches.map((x: any) => [removeSnakeCaseString(x[1]), data[x[0]] || 0]));
}
/**
 * Zombies - Stats by Map + Difficulty
 */
class ZombiesStats {
  bestRound: number;
  deaths: number;
  doorsOpened: number;
  fastestRound10: number;
  fastestRound20: number;
  fastestRound30: number;
  playersRevived: number;
  timesKnockedDown: number;
  roundsSurvived: number;
  windowsRepaired: number;
  wins: number;
  zombieKills: number;
  constructor(data: Record<string, any>, type: string = '') {
    if (type) type = `_${type}`;
    this.bestRound = data[`best_round_zombies${type}`] || 0;
    this.deaths = data[`deaths_zombies${type}`] || 0;
    this.doorsOpened = data[`doors_opened_zombies${type}`] || 0;
    this.fastestRound10 = data[`fastest_time_10_zombies${type}_normal`] || 0;
    this.fastestRound20 = data[`fastest_time_20_zombies${type}_normal`] || 0;
    this.fastestRound30 = data[`fastest_time_30_zombies${type}_normal`] || 0;
    this.playersRevived = data[`players_revived_zombies${type}`] || 0;
    this.timesKnockedDown = data[`times_knocked_down_zombies${type}`] || 0;
    this.roundsSurvived = data[`total_rounds_survived_zombies${type}`] || 0;
    this.windowsRepaired = data[`windows_repaired_zombies${type}`] || 0;
    this.wins = data[`wins_zombies${type}`] || 0;
    this.zombieKills = data[`zombie_kills_zombies${type}`] || 0;
  }
}

/**
 * Zombies - Overall stats
 */
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
    this.killsByZombie = parseZombiesKills(data);
    this.bulletsHit = data.bullets_hit_zombies || 0;
    this.bulletsShot = data.bullets_shot_zombies || 0;
    this.gunAccuracy = Divide(this.bulletsHit, this.bulletsShot);
    this.headshots = data.headshots_zombies || 0;
    this.headshotAccuracy = Divide(this.headshots, this.bulletsShot);
  }
}

/**
 * Dropper stats by map
 */
class DropperMap {
  bestTime: number;
  completions: number;
  constructor(data: Record<string, any>, mapName: string) {
    this.bestTime = data?.[mapName]?.best_time ?? 0;
    this.completions = data?.[mapName]?.completions ?? 0;
  }
}

/**
 * Blocking Dead class
 */
class BlockingDead {
  wins: number;
  kills: number;
  headshots: number;
  constructor(data: Record<string, any>) {
    this.wins = data.wins_dayone || 0;
    this.kills = data.kills_dayone || 0;
    this.headshots = data.headshots_dayone || 0;
  }
}
/**
 * Bounty Hunters class
 */
class BountyHunters {
  wins: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  bountyKills: number;
  bowKills: number;
  swordKills: number;
  constructor(data: Record<string, any>) {
    this.wins = data.wins_oneinthequiver || 0;
    this.kills = data.kills_oneinthequiver || 0;
    this.deaths = data.deaths_oneinthequiver || 0;
    this.KDRatio = Divide(this.kills, this.deaths);
    this.bountyKills = data.bounty_kills_oneinthequiver || 0;
    this.bowKills = data.bow_kills_oneinthequiver || 0;
    this.swordKills = data.sword_kills_oneinthequiver || 0;
  }
}
/**
 * Capture The Wool class
 */
class CaptureTheWool {
  wins: number;
  losses: number;
  WLRatio: number;
  draws: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  assists: number;
  woolPickedUp: number;
  woolCaptured: number;
  fastestWin: number;
  longestGame: number;
  constructor(data: Record<string, any>) {
    this.wins = data.woolhunt_participated_wins || 0;
    this.losses = data.woolhunt_participated_losses || 0;
    this.WLRatio = Divide(this.wins, this.losses);
    this.draws = data.woolhunt_participated_draws || 0;
    this.kills = data.woolhunt_kills || 0;
    this.deaths = data.woolhunt_deaths || 0;
    this.KDRatio = Divide(this.kills, this.deaths);
    this.assists = data.woolhunt_assists || 0;
    this.woolPickedUp = data.woolhunt_wools_stolen || 0;
    this.woolCaptured = data.woolhunt_wools_captured || 0;
    this.fastestWin = data.woolhunt_fastest_win || 0;
    this.longestGame = data.woolhunt_longest_game || 0;
  }
}
/**
 * Dragon Wars class
 */
class DragonWars {
  wins: number;
  kills: number;
  constructor(data: Record<string, any>) {
    this.wins = data.wins_dragonwars2 || 0;
    this.kills = data.kills_dragonwars2 || 0;
  }
}
/**
 * Dropper class
 */
class Dropper {
  wins: number;
  fails: number;
  fastestGame: number;
  flawlessGames: number;
  gamesPlayed: number;
  mapsCompleted: number;
  gamesFinished: number;
  maps: Record<string, DropperMap>;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins ?? 0;
    this.fails = data?.fails ?? 0;
    this.fastestGame = data?.fastest_game ?? 0;
    this.flawlessGames = data?.flawless_games ?? 0;
    this.gamesPlayed = data?.games_played ?? 0;
    this.mapsCompleted = data?.maps_completed ?? 0;
    this.gamesFinished = data?.games_finished ?? 0;
    this.maps = {};
    Object.keys(data?.map_stats ?? {}).forEach((map) => {
      this.maps[map] = new DropperMap(data?.map_stats, map);
    });
  }
}
/**
 * Ender Spleef class
 */
class EnderSpleef {
  wins: number;
  kills: number;
  trail: string;
  blocksDestroyed: number;
  bigShotActivations: number;
  tripleShotActivations: number;
  totalPowerUpActivations: number;
  constructor(data: Record<string, any>) {
    this.wins = data.wins_ender || 0;
    this.kills = data.kills_dragonwars2 || 0;
    this.trail = data.enderspleef_trail || '';
    this.blocksDestroyed = data.blocks_destroyed_ender || 0;
    this.bigShotActivations = data.bigshot_powerup_activations_ender || 0;
    this.tripleShotActivations = data.tripleshot_powerup_activations_ender || 0;
    this.totalPowerUpActivations = this.bigShotActivations + this.tripleShotActivations;
  }
}
/**
 * Farm Hunt class
 */
class FarmHunt {
  wins: number;
  winsAsAnimal: number;
  winsAsHunter: number;
  kills: number;
  killsAsAnimal: number;
  killsAsHunter: number;
  tauntsUsed: number;
  riskyTauntsUsed: number;
  safeTauntsUsed: number;
  dangerousTauntsUsed: number;
  fireworkTauntsUsed: number;
  poop: number;
  constructor(data: Record<string, any>) {
    this.wins = data.wins_farm_hunt || 0;
    this.winsAsAnimal = data.animal_wins_farm_hunt || 0;
    this.winsAsHunter = data.hunter_wins_farm_hunt || 0;
    this.kills = data.kills_farm_hunt || 0;
    this.killsAsAnimal = data.animal_kills_farm_hunt || 0;
    this.killsAsHunter = data.hunter_kills_farm_hunt || 0;
    this.tauntsUsed = data.taunts_used_farm_hunt || 0;
    this.riskyTauntsUsed = data.risky_taunts_used_farm_hunt || 0;
    this.safeTauntsUsed = data.safe_taunts_used_farm_hunt || 0;
    this.dangerousTauntsUsed = data.dangerous_taunts_used_farm_hunt || 0;
    this.fireworkTauntsUsed = data.firework_taunts_used_farm_hunt || 0;
    this.poop = (data.poop_collected_farm_hunt || 0) + (data.poop_collected || 0);
  }
}
/**
 * Football class
 */
class Football {
  wins: number;
  goals: number;
  kicks: number;
  powerKicks: number;
  constructor(data: Record<string, any>) {
    this.wins = data.wins_soccer || 0;
    this.goals = data.goals_soccer || 0;
    this.kicks = data.kicks_soccer || 0;
    this.powerKicks = data.powerkicks_soccer || 0;
  }
}
/**
 * Galxy Wars
 */
class GalaxyWars {
  wins: number;
  kills: number;
  deaths: number;
  shotsFired: number;
  weeklyKills: number;
  monthlyKills: number;
  attackerKills: number;
  defenderKills: number;
  constructor(data: Record<string, any>) {
    this.wins = data.sw_game_wins || 0;
    this.kills = data.sw_kills || 0;
    this.deaths = data.sw_deaths || 0;
    this.shotsFired = data.sw_shots_fired || 0;
    this.weeklyKills = parseInt(data[`weekly_kills_${weekAB()}`] || 0, 10);
    this.monthlyKills = parseInt(data[`monthly_kills_${monthAB()}`] || 0, 10);
    this.attackerKills = data.sw_rebel_kills || 0;
    this.defenderKills = data.sw_empire_kills || 0;
  }
}
/**
 * Party Popper Stats (Sub gamemode of Hide and Seek)
 */
class PartyPopper {
  winsAsSeeker: number;
  winsAsHider: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.winsAsSeeker = data.party_pooper_seeker_wins_hide_and_seek || 0;
    this.winsAsHider = data.party_pooper_hider_wins_hide_and_seek || 0;
    this.wins = this.winsAsSeeker + this.winsAsHider;
  }
}
/**
 * Prop Hunt Stats (Sub gamemode of Hide and Seek)
 */
class PropHunt {
  winsAsSeeker: number;
  winsAsHider: number;
  wins: number;
  constructor(data: Record<string, any>) {
    this.winsAsSeeker = data.prop_hunt_seeker_wins_hide_and_seek || 0;
    this.winsAsHider = data.prop_hunt_hider_wins_hide_and_seek || 0;
    this.wins = this.winsAsSeeker + this.winsAsHider;
  }
}
/**
 * Hide And Seek Stats
 */
class HideAndSeek {
  partyPopper: PartyPopper;
  propHunt: PropHunt;
  winsAsSeeker: number;
  winsAsHider: number;
  constructor(data: Record<string, any>) {
    this.partyPopper = new PartyPopper(data);
    this.propHunt = new PropHunt(data);
    this.winsAsSeeker = data.seeker_wins_hide_and_seek || 0;
    this.winsAsHider = data.hider_wins_hide_and_seek || 0;
  }
}
/**
 * Hide And Seek Stats
 */
class HoleInTheWall {
  wins: number;
  rounds: number;
  scoreRecordFinals: number;
  scoreRecordNormal: number;
  scoreRecordOverall: number;
  constructor(data: Record<string, any>) {
    this.wins = data.wins_hole_in_the_wall || 0;
    this.rounds = data.rounds_hole_in_the_wall || 0;
    this.scoreRecordFinals = data.hitw_record_f || 0;
    this.scoreRecordNormal = data.hitw_record_q || 0;
    this.scoreRecordOverall = this.scoreRecordFinals + this.scoreRecordNormal;
  }
}
/**
 * Hypixel Says Stats
 */
class HypixelSays {
  wins: number;
  rounds: number;
  roundWins: number;
  topScore: number;
  constructor(data: Record<string, any>) {
    this.wins = data.wins_simon_says || 0;
    this.rounds = data.rounds_simon_says || 0;
    this.roundWins = data.round_wins_simon_says || 0;
    this.topScore = data.top_score_simon_says || 0;
  }
}
/**
 * Mini Walls class
 */
class MiniWalls {
  kit: string;
  wins: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  finalKills: number;
  witherKills: number;
  witherDamage: number;
  arrowsShot: number;
  arrowsHit: number;
  bowAccuracy: number;
  constructor(data: Record<string, any>) {
    this.kit = data.miniWalls_activeKit || '';
    this.wins = data.wins_mini_walls || 0;
    this.kills = data.kills_mini_walls || 0;
    this.deaths = data.deaths_mini_walls || 0;
    this.KDRatio = Divide(this.kills, this.deaths);
    this.finalKills = data.final_kills_mini_walls || 0;
    this.witherKills = data.wither_kills_mini_walls || 0;
    this.witherDamage = data.wither_damage_mini_walls || 0;
    this.arrowsShot = data.arrows_shot_mini_walls || 0;
    this.arrowsHit = data.arrows_hit_mini_walls || 0;
    this.bowAccuracy = Divide(this.arrowsHit, this.arrowsShot);
  }
}
/**
 * Party Games class
 */
class PartyGames {
  wins: number;
  roundWins: number;
  stars: number;
  constructor(data: Record<string, any>) {
    this.wins = data.wins_party || 0;
    this.roundWins = data.round_wins_party || 0;
    this.stars = data.total_stars_party || 0;
  }
}
/**
 * Pixel Party Game Mode
 */
class PixelPartyGameMode {
  wins: number;
  gamesPlayed: number;
  losses: number;
  WLRatio: number;
  roundsPlayed: number;
  powerUpsCollected: number;
  constructor(data: Record<string, any>, modeName: string) {
    this.wins = data?.[`wins_${modeName}`] || 0;
    this.gamesPlayed = data?.[`games_played_${modeName}`] || 0;
    this.losses = this.gamesPlayed - this.wins;
    this.WLRatio = Divide(this.wins, this.losses);
    this.roundsPlayed = data?.[`rounds_completed_${modeName}`] || 0;
    this.powerUpsCollected = data?.[`power_ups_collected_${modeName}`] || 0;
  }
}
/**
 * Party Games class
 */
class PixelParty {
  wins: number;
  gamesPlayed: number;
  losses: number;
  WLRatio: number;
  roundsPlayed: number;
  powerUpsCollected: number;
  normal: PixelPartyGameMode;
  hyper: PixelPartyGameMode;
  highestRound: number;
  musicVolume: number;
  colorBlind: object;
  constructor(data: Record<string, any>) {
    this.wins = data?.pixel_party?.wins || 0;
    this.gamesPlayed = data?.pixel_party?.games_played || 0;
    this.losses = this.gamesPlayed - this.wins;
    this.WLRatio = Divide(this.wins, this.losses);
    this.roundsPlayed = data?.pixel_party?.rounds_completed || 0;
    this.powerUpsCollected = data?.pixel_party?.power_ups_collected || 0;
    this.normal = new PixelPartyGameMode(data.pixel_party, 'normal');
    this.hyper = new PixelPartyGameMode(data.pixel_party, 'hyper');
    this.highestRound = data?.pixel_party?.highest_round || 0;
    this.musicVolume = data.pixel_party_music_volume || 0;
    this.colorBlind = data.pixelparty || {};
  }
}
/**
 * Throw Out class
 */
class ThrowOut {
  wins: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  constructor(data: Record<string, any>) {
    this.wins = data.wins_throw_out || 0;
    this.kills = data.kills_throw_out || 0;
    this.deaths = data.deaths_throw_out || 0;
    this.KDRatio = Divide(this.kills, this.deaths);
  }
}
/**
 * Arcade class
 */
class Arcade {
  coins: number;
  weeklyCoins: number;
  monthlyCoins: number;
  hintsDisabled: boolean;
  flashDisabled: boolean;
  blockingDead: BlockingDead;
  bountyHunters: BountyHunters;
  captureTheWool: CaptureTheWool;
  dragonWars: DragonWars;
  dropper: Dropper;
  enderSpleef: EnderSpleef;
  farmHunt: FarmHunt;
  football: Football;
  galaxyWars: GalaxyWars;
  hideAndSeek: HideAndSeek;
  holeInTheWall: HoleInTheWall;
  hypixelSays: HypixelSays;
  miniWalls: MiniWalls;
  partyGames: PartyGames;
  pixelParty: PixelParty;
  throwOut: ThrowOut;
  zombies: Zombies;
  constructor(data: Record<string, any> = {}) {
    this.coins = data.coins || 0;
    this.weeklyCoins = parseInt(data[`weekly_coins_${weekAB()}`] || 0, 10);
    this.monthlyCoins = parseInt(data[`monthly_coins_${monthAB()}`] || 0, 10);
    this.hintsDisabled = !data.hints;
    this.flashDisabled = !data.flash;
    this.blockingDead = new BlockingDead(data);
    this.bountyHunters = new BountyHunters(data);
    this.captureTheWool = new CaptureTheWool(data);
    this.dragonWars = new DragonWars(data);
    this.dropper = new Dropper(data.dropper);
    this.enderSpleef = new EnderSpleef(data);
    this.farmHunt = new FarmHunt(data);
    this.football = new Football(data);
    this.galaxyWars = new GalaxyWars(data);
    this.hideAndSeek = new HideAndSeek(data);
    this.holeInTheWall = new HoleInTheWall(data);
    this.hypixelSays = new HypixelSays(data);
    this.miniWalls = new MiniWalls(data);
    this.partyGames = new PartyGames(data);
    this.pixelParty = new PixelParty(data);
    this.throwOut = new ThrowOut(data);
    this.zombies = new Zombies(data);
  }
}

export default Arcade;
