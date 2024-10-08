import Arcade, {
  BlockingDead,
  BountyHunters,
  DragonWars,
  Dropper,
  DropperMap,
  EnderSpleef,
  FarmHunt,
  Football,
  GalaxyWars,
  HideAndSeek,
  HoleInTheWall,
  HypixelSays,
  MiniWalls,
  PartyGames,
  PartyPooper,
  PixelParty,
  PixelPartyGameMode,
  PropHunt,
  ThrowOut,
  Zombies,
  ZombiesStats
} from './Arcade.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Arcade (DropperMap)', () => {
  const data = new DropperMap({ stats: 'meow' }, 'meow');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DropperMap);
  expectTypeOf(data).toEqualTypeOf<DropperMap>();
  expect(data.bestTime).toBeDefined();
  expect(data.bestTime).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bestTime).toEqualTypeOf<number>();
  expect(data.completions).toBeDefined();
  expect(data.completions).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.completions).toEqualTypeOf<number>();
});

test('Arcade', () => {
  const data = new Arcade({ stats: 'meow', achievements: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Arcade);
  expectTypeOf(data).toEqualTypeOf<Arcade>();
  expect(data.coins).toBeDefined();
  expectTypeOf(data.coins).toEqualTypeOf<number>();
  expect(data.weeklyCoins).toBeDefined();
  expectTypeOf(data.weeklyCoins).toEqualTypeOf<number>();
  expect(data.monthlyCoins).toBeDefined();
  expectTypeOf(data.monthlyCoins).toEqualTypeOf<number>();
  expect(data.hintsDisabled).toBeDefined();
  expectTypeOf(data.hintsDisabled).toEqualTypeOf<boolean>();
  expect(data.flashDisabled).toBeDefined();
  expectTypeOf(data.flashDisabled).toEqualTypeOf<boolean>();
  expect(data.blockingDead).toBeDefined();
  expectTypeOf(data.blockingDead).toEqualTypeOf<BlockingDead>();
  expect(data.blockingDead.wins).toBeDefined();
  expect(data.blockingDead.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.blockingDead.wins).toEqualTypeOf<number>();
  expect(data.blockingDead.kills).toBeDefined();
  expect(data.blockingDead.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.blockingDead.kills).toEqualTypeOf<number>();
  expect(data.blockingDead.headshots).toBeDefined();
  expect(data.blockingDead.headshots).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.blockingDead.headshots).toEqualTypeOf<number>();
  expect(data.bountyHunters).toBeDefined();
  expectTypeOf(data.bountyHunters).toEqualTypeOf<BountyHunters>();
  expect(data.bountyHunters.wins).toBeDefined();
  expect(data.bountyHunters.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bountyHunters.wins).toEqualTypeOf<number>();
  expect(data.bountyHunters.kills).toBeDefined();
  expect(data.bountyHunters.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bountyHunters.kills).toEqualTypeOf<number>();
  expect(data.bountyHunters.deaths).toBeDefined();
  expect(data.bountyHunters.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bountyHunters.deaths).toEqualTypeOf<number>();
  expect(data.bountyHunters.KDR).toBeDefined();
  expect(data.bountyHunters.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bountyHunters.KDR).toEqualTypeOf<number>();
  expect(data.bountyHunters.bountyKills).toBeDefined();
  expect(data.bountyHunters.bountyKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bountyHunters.bountyKills).toEqualTypeOf<number>();
  expect(data.bountyHunters.bowKills).toBeDefined();
  expect(data.bountyHunters.bowKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bountyHunters.bowKills).toEqualTypeOf<number>();
  expect(data.bountyHunters.swordKills).toBeDefined();
  expect(data.bountyHunters.swordKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bountyHunters.swordKills).toEqualTypeOf<number>();
  expect(data.dragonWars).toBeDefined();
  expectTypeOf(data.dragonWars).toEqualTypeOf<DragonWars>();
  expect(data.dragonWars.wins).toBeDefined();
  expect(data.dragonWars.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.dragonWars.wins).toEqualTypeOf<number>();
  expect(data.dragonWars.kills).toBeDefined();
  expect(data.dragonWars.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.dragonWars.kills).toEqualTypeOf<number>();
  expect(data.dropper).toBeDefined();
  expectTypeOf(data.dropper).toEqualTypeOf<Dropper>();
  expect(data.dropper.wins).toBeDefined();
  expect(data.dropper.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.dropper.wins).toEqualTypeOf<number>();
  expect(data.dropper.fails).toBeDefined();
  expect(data.dropper.fails).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.dropper.fails).toEqualTypeOf<number>();
  expect(data.dropper.fastestGame).toBeDefined();
  expect(data.dropper.fastestGame).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.dropper.fastestGame).toEqualTypeOf<number>();
  expect(data.dropper.flawlessGames).toBeDefined();
  expect(data.dropper.flawlessGames).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.dropper.flawlessGames).toEqualTypeOf<number>();
  expect(data.dropper.gamesPlayed).toBeDefined();
  expect(data.dropper.gamesPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.dropper.gamesPlayed).toEqualTypeOf<number>();
  expect(data.dropper.mapsCompleted).toBeDefined();
  expect(data.dropper.mapsCompleted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.dropper.mapsCompleted).toEqualTypeOf<number>();
  expect(data.dropper.gamesFinished).toBeDefined();
  expect(data.dropper.gamesFinished).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.dropper.gamesFinished).toEqualTypeOf<number>();
  expect(data.dropper.maps).toBeDefined();
  expectTypeOf(data.dropper.maps).toEqualTypeOf<Record<string, DropperMap>>();
  Object.keys(data.dropper.maps).forEach((map: string) => {
    if (undefined === data.dropper.maps[map]) return;
    expect(data.dropper.maps[map]).toBeDefined();
    expect(data.dropper.maps[map]).instanceOf(DropperMap);
    expectTypeOf(data.dropper.maps[map]).toEqualTypeOf<DropperMap>();
    expect(data.dropper.maps[map].bestTime).toBeDefined();
    expect(data.dropper.maps[map].bestTime).toBeGreaterThanOrEqual(0);
    expectTypeOf(data.dropper.maps[map].bestTime).toEqualTypeOf<number>();
    expect(data.dropper.maps[map].completions).toBeDefined();
    expect(data.dropper.maps[map].completions).toBeGreaterThanOrEqual(0);
    expectTypeOf(data.dropper.maps[map].completions).toEqualTypeOf<number>();
  });
  expect(data.enderSpleef).toBeDefined();
  expectTypeOf(data.enderSpleef).toEqualTypeOf<EnderSpleef>();
  expect(data.enderSpleef.wins).toBeDefined();
  expect(data.enderSpleef.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.enderSpleef.wins).toEqualTypeOf<number>();
  expect(data.enderSpleef.kills).toBeDefined();
  expect(data.enderSpleef.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.enderSpleef.kills).toEqualTypeOf<number>();
  expect(data.enderSpleef.trail).toBeDefined();
  expectTypeOf(data.enderSpleef.trail).toEqualTypeOf<string>();
  expect(data.enderSpleef.blocksDestroyed).toBeDefined();
  expect(data.enderSpleef.blocksDestroyed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.enderSpleef.blocksDestroyed).toEqualTypeOf<number>();
  expect(data.enderSpleef.bigShotActivations).toBeDefined();
  expect(data.enderSpleef.bigShotActivations).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.enderSpleef.bigShotActivations).toEqualTypeOf<number>();
  expect(data.enderSpleef.tripleShotActivations).toBeDefined();
  expect(data.enderSpleef.tripleShotActivations).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.enderSpleef.tripleShotActivations).toEqualTypeOf<number>();
  expect(data.enderSpleef.totalPowerUpActivations).toBeDefined();
  expect(data.enderSpleef.totalPowerUpActivations).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.enderSpleef.totalPowerUpActivations).toEqualTypeOf<number>();
  expect(data.farmHunt).toBeDefined();
  expectTypeOf(data.farmHunt).toEqualTypeOf<FarmHunt>();
  expect(data.farmHunt.wins).toBeDefined();
  expect(data.farmHunt.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.farmHunt.wins).toEqualTypeOf<number>();
  expect(data.farmHunt.winsAsAnimal).toBeDefined();
  expect(data.farmHunt.winsAsAnimal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.farmHunt.winsAsAnimal).toEqualTypeOf<number>();
  expect(data.farmHunt.winsAsHunter).toBeDefined();
  expect(data.farmHunt.winsAsHunter).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.farmHunt.winsAsHunter).toEqualTypeOf<number>();
  expect(data.farmHunt.kills).toBeDefined();
  expect(data.farmHunt.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.farmHunt.kills).toEqualTypeOf<number>();
  expect(data.farmHunt.killsAsAnimal).toBeDefined();
  expect(data.farmHunt.killsAsAnimal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.farmHunt.killsAsAnimal).toEqualTypeOf<number>();
  expect(data.farmHunt.killsAsHunter).toBeDefined();
  expect(data.farmHunt.killsAsHunter).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.farmHunt.killsAsHunter).toEqualTypeOf<number>();
  expect(data.farmHunt.tauntsUsed).toBeDefined();
  expect(data.farmHunt.tauntsUsed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.farmHunt.tauntsUsed).toEqualTypeOf<number>();
  expect(data.farmHunt.riskyTauntsUsed).toBeDefined();
  expect(data.farmHunt.riskyTauntsUsed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.farmHunt.riskyTauntsUsed).toEqualTypeOf<number>();
  expect(data.farmHunt.safeTauntsUsed).toBeDefined();
  expect(data.farmHunt.safeTauntsUsed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.farmHunt.safeTauntsUsed).toEqualTypeOf<number>();
  expect(data.farmHunt.dangerousTauntsUsed).toBeDefined();
  expect(data.farmHunt.dangerousTauntsUsed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.farmHunt.dangerousTauntsUsed).toEqualTypeOf<number>();
  expect(data.farmHunt.fireworkTauntsUsed).toBeDefined();
  expect(data.farmHunt.fireworkTauntsUsed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.farmHunt.fireworkTauntsUsed).toEqualTypeOf<number>();
  expect(data.farmHunt.poop).toBeDefined();
  expect(data.farmHunt.poop).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.farmHunt.poop).toEqualTypeOf<number>();
  expect(data.football).toBeDefined();
  expectTypeOf(data.football).toEqualTypeOf<Football>();
  expect(data.football.wins).toBeDefined();
  expect(data.football.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.football.wins).toEqualTypeOf<number>();
  expect(data.football.goals).toBeDefined();
  expect(data.football.goals).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.football.goals).toEqualTypeOf<number>();
  expect(data.football.kicks).toBeDefined();
  expect(data.football.kicks).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.football.kicks).toEqualTypeOf<number>();
  expect(data.football.powerKicks).toBeDefined();
  expect(data.football.powerKicks).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.football.powerKicks).toEqualTypeOf<number>();
  expect(data.galaxyWars).toBeDefined();
  expectTypeOf(data.galaxyWars).toEqualTypeOf<GalaxyWars>();
  expect(data.galaxyWars.wins).toBeDefined();
  expect(data.galaxyWars.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.galaxyWars.wins).toEqualTypeOf<number>();
  expect(data.galaxyWars.kills).toBeDefined();
  expect(data.galaxyWars.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.galaxyWars.kills).toEqualTypeOf<number>();
  expect(data.galaxyWars.deaths).toBeDefined();
  expect(data.galaxyWars.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.galaxyWars.deaths).toEqualTypeOf<number>();
  expect(data.galaxyWars.shotsFired).toBeDefined();
  expect(data.galaxyWars.shotsFired).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.galaxyWars.shotsFired).toEqualTypeOf<number>();
  expect(data.galaxyWars.weeklyKills).toBeDefined();
  expect(data.galaxyWars.weeklyKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.galaxyWars.weeklyKills).toEqualTypeOf<number>();
  expect(data.galaxyWars.monthlyKills).toBeDefined();
  expect(data.galaxyWars.monthlyKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.galaxyWars.monthlyKills).toEqualTypeOf<number>();
  expect(data.galaxyWars.attackerKills).toBeDefined();
  expect(data.galaxyWars.attackerKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.galaxyWars.attackerKills).toEqualTypeOf<number>();
  expect(data.galaxyWars.defenderKills).toBeDefined();
  expect(data.galaxyWars.defenderKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.galaxyWars.defenderKills).toEqualTypeOf<number>();
  expect(data.hideAndSeek).toBeDefined();
  expectTypeOf(data.hideAndSeek).toEqualTypeOf<HideAndSeek>();
  expect(data.hideAndSeek.partyPooper).toBeDefined();
  expectTypeOf(data.hideAndSeek.partyPooper).toEqualTypeOf<PartyPooper>();
  expect(data.hideAndSeek.partyPooper.winsAsSeeker).toBeDefined();
  expect(data.hideAndSeek.partyPooper.winsAsSeeker).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.hideAndSeek.partyPooper.winsAsSeeker).toEqualTypeOf<number>();
  expect(data.hideAndSeek.partyPooper.winsAsHider).toBeDefined();
  expect(data.hideAndSeek.partyPooper.winsAsHider).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.hideAndSeek.partyPooper.winsAsHider).toEqualTypeOf<number>();
  expect(data.hideAndSeek.partyPooper.wins).toBeDefined();
  expect(data.hideAndSeek.partyPooper.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.hideAndSeek.partyPooper.wins).toEqualTypeOf<number>();
  expect(data.hideAndSeek.propHunt).toBeDefined();
  expectTypeOf(data.hideAndSeek.propHunt).toEqualTypeOf<PropHunt>();
  expect(data.hideAndSeek.propHunt.winsAsSeeker).toBeDefined();
  expect(data.hideAndSeek.propHunt.winsAsSeeker).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.hideAndSeek.propHunt.winsAsSeeker).toEqualTypeOf<number>();
  expect(data.hideAndSeek.propHunt.winsAsHider).toBeDefined();
  expect(data.hideAndSeek.propHunt.winsAsHider).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.hideAndSeek.propHunt.winsAsHider).toEqualTypeOf<number>();
  expect(data.hideAndSeek.propHunt.wins).toBeDefined();
  expect(data.hideAndSeek.propHunt.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.hideAndSeek.propHunt.wins).toEqualTypeOf<number>();
  expect(data.hideAndSeek.winsAsSeeker).toBeDefined();
  expect(data.hideAndSeek.winsAsSeeker).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.hideAndSeek.winsAsSeeker).toEqualTypeOf<number>();
  expect(data.hideAndSeek.winsAsHider).toBeDefined();
  expect(data.hideAndSeek.winsAsHider).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.hideAndSeek.winsAsHider).toEqualTypeOf<number>();
  expect(data.holeInTheWall).toBeDefined();
  expectTypeOf(data.holeInTheWall).toEqualTypeOf<HoleInTheWall>();
  expect(data.holeInTheWall.wins).toBeDefined();
  expect(data.holeInTheWall.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.holeInTheWall.wins).toEqualTypeOf<number>();
  expect(data.holeInTheWall.rounds).toBeDefined();
  expect(data.holeInTheWall.rounds).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.holeInTheWall.rounds).toEqualTypeOf<number>();
  expect(data.holeInTheWall.scoreRecordFinals).toBeDefined();
  expect(data.holeInTheWall.scoreRecordFinals).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.holeInTheWall.scoreRecordFinals).toEqualTypeOf<number>();
  expect(data.holeInTheWall.scoreRecordNormal).toBeDefined();
  expect(data.holeInTheWall.scoreRecordNormal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.holeInTheWall.scoreRecordNormal).toEqualTypeOf<number>();
  expect(data.holeInTheWall.scoreRecordOverall).toBeDefined();
  expect(data.holeInTheWall.scoreRecordOverall).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.holeInTheWall.scoreRecordOverall).toEqualTypeOf<number>();
  expect(data.hypixelSays).toBeDefined();
  expectTypeOf(data.hypixelSays).toEqualTypeOf<HypixelSays>();
  expect(data.hypixelSays.wins).toBeDefined();
  expect(data.hypixelSays.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.hypixelSays.wins).toEqualTypeOf<number>();
  expect(data.hypixelSays.rounds).toBeDefined();
  expect(data.hypixelSays.rounds).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.hypixelSays.rounds).toEqualTypeOf<number>();
  expect(data.hypixelSays.roundWins).toBeDefined();
  expect(data.hypixelSays.roundWins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.hypixelSays.roundWins).toEqualTypeOf<number>();
  expect(data.hypixelSays.topScore).toBeDefined();
  expect(data.hypixelSays.topScore).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.hypixelSays.topScore).toEqualTypeOf<number>();
  expect(data.miniWalls).toBeDefined();
  expectTypeOf(data.miniWalls).toEqualTypeOf<MiniWalls>();
  expect(data.miniWalls.kit).toBeDefined();
  expectTypeOf(data.miniWalls.kit).toEqualTypeOf<string>();
  expect(data.miniWalls.wins).toBeDefined();
  expect(data.miniWalls.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.miniWalls.wins).toEqualTypeOf<number>();
  expect(data.miniWalls.kills).toBeDefined();
  expect(data.miniWalls.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.miniWalls.kills).toEqualTypeOf<number>();
  expect(data.miniWalls.deaths).toBeDefined();
  expect(data.miniWalls.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.miniWalls.deaths).toEqualTypeOf<number>();
  expect(data.miniWalls.KDR).toBeDefined();
  expect(data.miniWalls.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.miniWalls.KDR).toEqualTypeOf<number>();
  expect(data.miniWalls.finalKills).toBeDefined();
  expect(data.miniWalls.finalKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.miniWalls.finalKills).toEqualTypeOf<number>();
  expect(data.miniWalls.witherKills).toBeDefined();
  expect(data.miniWalls.witherKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.miniWalls.witherKills).toEqualTypeOf<number>();
  expect(data.miniWalls.witherDamage).toBeDefined();
  expect(data.miniWalls.witherDamage).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.miniWalls.witherDamage).toEqualTypeOf<number>();
  expect(data.miniWalls.arrowsShot).toBeDefined();
  expect(data.miniWalls.arrowsShot).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.miniWalls.arrowsShot).toEqualTypeOf<number>();
  expect(data.miniWalls.arrowsHit).toBeDefined();
  expect(data.miniWalls.arrowsHit).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.miniWalls.arrowsHit).toEqualTypeOf<number>();
  expect(data.miniWalls.bowAccuracy).toBeDefined();
  expect(data.miniWalls.bowAccuracy).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.miniWalls.bowAccuracy).toEqualTypeOf<number>();
  expect(data.partyGames).toBeDefined();
  expectTypeOf(data.partyGames).toEqualTypeOf<PartyGames>();
  expect(data.partyGames.wins).toBeDefined();
  expect(data.partyGames.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.partyGames.wins).toEqualTypeOf<number>();
  expect(data.partyGames.roundWins).toBeDefined();
  expect(data.partyGames.roundWins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.partyGames.roundWins).toEqualTypeOf<number>();
  expect(data.partyGames.stars).toBeDefined();
  expect(data.partyGames.stars).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.partyGames.stars).toEqualTypeOf<number>();
  expect(data.pixelParty).toBeDefined();
  expectTypeOf(data.pixelParty).toEqualTypeOf<PixelParty>();
  expect(data.pixelParty.wins).toBeDefined();
  expect(data.pixelParty.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.wins).toEqualTypeOf<number>();
  expect(data.pixelParty.gamesPlayed).toBeDefined();
  expect(data.pixelParty.gamesPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.gamesPlayed).toEqualTypeOf<number>();
  expect(data.pixelParty.losses).toBeDefined();
  expect(data.pixelParty.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.losses).toEqualTypeOf<number>();
  expect(data.pixelParty.WLR).toBeDefined();
  expect(data.pixelParty.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.WLR).toEqualTypeOf<number>();
  expect(data.pixelParty.roundsPlayed).toBeDefined();
  expect(data.pixelParty.roundsPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.roundsPlayed).toEqualTypeOf<number>();
  expect(data.pixelParty.powerUpsCollected).toBeDefined();
  expect(data.pixelParty.powerUpsCollected).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.powerUpsCollected).toEqualTypeOf<number>();
  expect(data.pixelParty.normal).toBeDefined();
  expectTypeOf(data.pixelParty.normal).toEqualTypeOf<PixelPartyGameMode>();
  expect(data.pixelParty.normal.wins).toBeDefined();
  expect(data.pixelParty.normal.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.normal.wins).toEqualTypeOf<number>();
  expect(data.pixelParty.normal.gamesPlayed).toBeDefined();
  expect(data.pixelParty.normal.gamesPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.normal.gamesPlayed).toEqualTypeOf<number>();
  expect(data.pixelParty.normal.losses).toBeDefined();
  expect(data.pixelParty.normal.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.normal.losses).toEqualTypeOf<number>();
  expect(data.pixelParty.normal.WLR).toBeDefined();
  expect(data.pixelParty.normal.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.normal.WLR).toEqualTypeOf<number>();
  expect(data.pixelParty.normal.roundsPlayed).toBeDefined();
  expect(data.pixelParty.normal.roundsPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.normal.roundsPlayed).toEqualTypeOf<number>();
  expect(data.pixelParty.normal.powerUpsCollected).toBeDefined();
  expect(data.pixelParty.normal.powerUpsCollected).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.normal.powerUpsCollected).toEqualTypeOf<number>();
  expect(data.pixelParty.hyper).toBeDefined();
  expectTypeOf(data.pixelParty.hyper).toEqualTypeOf<PixelPartyGameMode>();
  expect(data.pixelParty.hyper.wins).toBeDefined();
  expect(data.pixelParty.hyper.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.hyper.wins).toEqualTypeOf<number>();
  expect(data.pixelParty.hyper.gamesPlayed).toBeDefined();
  expect(data.pixelParty.hyper.gamesPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.hyper.gamesPlayed).toEqualTypeOf<number>();
  expect(data.pixelParty.hyper.losses).toBeDefined();
  expect(data.pixelParty.hyper.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.hyper.losses).toEqualTypeOf<number>();
  expect(data.pixelParty.hyper.WLR).toBeDefined();
  expect(data.pixelParty.hyper.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.hyper.WLR).toEqualTypeOf<number>();
  expect(data.pixelParty.hyper.roundsPlayed).toBeDefined();
  expect(data.pixelParty.hyper.roundsPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.hyper.roundsPlayed).toEqualTypeOf<number>();
  expect(data.pixelParty.hyper.powerUpsCollected).toBeDefined();
  expect(data.pixelParty.hyper.powerUpsCollected).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.hyper.powerUpsCollected).toEqualTypeOf<number>();
  expect(data.pixelParty.highestRound).toBeDefined();
  expect(data.pixelParty.highestRound).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.highestRound).toEqualTypeOf<number>();
  expect(data.pixelParty.musicVolume).toBeDefined();
  expect(data.pixelParty.musicVolume).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pixelParty.musicVolume).toEqualTypeOf<number>();
  expect(data.pixelParty.colorBlind).toBeDefined();
  expectTypeOf(data.pixelParty.colorBlind).toEqualTypeOf<object>();
  expect(data.throwOut).toBeDefined();
  expectTypeOf(data.throwOut).toEqualTypeOf<ThrowOut>();
  expect(data.throwOut.wins).toBeDefined();
  expect(data.throwOut.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.throwOut.wins).toEqualTypeOf<number>();
  expect(data.throwOut.kills).toBeDefined();
  expect(data.throwOut.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.throwOut.kills).toEqualTypeOf<number>();
  expect(data.throwOut.deaths).toBeDefined();
  expect(data.throwOut.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.throwOut.deaths).toEqualTypeOf<number>();
  expect(data.throwOut.KDR).toBeDefined();
  expect(data.throwOut.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.throwOut.KDR).toEqualTypeOf<number>();
  expect(data.zombies).toBeDefined();
  expectTypeOf(data.zombies).toEqualTypeOf<Zombies>();
  expect(data.zombies.overall).toBeDefined();
  expectTypeOf(data.zombies.overall).toEqualTypeOf<ZombiesStats>();
  expect(data.zombies.overall.bestRound).toBeDefined();
  expect(data.zombies.overall.bestRound).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.overall.bestRound).toEqualTypeOf<number>();
  expect(data.zombies.overall.deaths).toBeDefined();
  expect(data.zombies.overall.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.overall.deaths).toEqualTypeOf<number>();
  expect(data.zombies.overall.doorsOpened).toBeDefined();
  expect(data.zombies.overall.doorsOpened).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.overall.doorsOpened).toEqualTypeOf<number>();
  expect(data.zombies.overall.fastestRound10).toBeDefined();
  expect(data.zombies.overall.fastestRound10).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.overall.fastestRound10).toEqualTypeOf<number>();
  expect(data.zombies.overall.fastestRound20).toBeDefined();
  expect(data.zombies.overall.fastestRound20).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.overall.fastestRound20).toEqualTypeOf<number>();
  expect(data.zombies.overall.fastestRound30).toBeDefined();
  expect(data.zombies.overall.fastestRound30).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.overall.fastestRound30).toEqualTypeOf<number>();
  expect(data.zombies.overall.playersRevived).toBeDefined();
  expect(data.zombies.overall.playersRevived).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.overall.playersRevived).toEqualTypeOf<number>();
  expect(data.zombies.overall.timesKnockedDown).toBeDefined();
  expect(data.zombies.overall.timesKnockedDown).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.overall.timesKnockedDown).toEqualTypeOf<number>();
  expect(data.zombies.overall.roundsSurvived).toBeDefined();
  expect(data.zombies.overall.roundsSurvived).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.overall.roundsSurvived).toEqualTypeOf<number>();
  expect(data.zombies.overall.windowsRepaired).toBeDefined();
  expect(data.zombies.overall.windowsRepaired).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.overall.windowsRepaired).toEqualTypeOf<number>();
  expect(data.zombies.overall.wins).toBeDefined();
  expect(data.zombies.overall.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.overall.wins).toEqualTypeOf<number>();
  expect(data.zombies.overall.zombieKills).toBeDefined();
  expect(data.zombies.overall.zombieKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.overall.zombieKills).toEqualTypeOf<number>();
  expect(data.zombies.deadEnd).toBeDefined();
  expectTypeOf(data.zombies.deadEnd).toEqualTypeOf<ZombiesStats>();
  expect(data.zombies.deadEnd.bestRound).toBeDefined();
  expect(data.zombies.deadEnd.bestRound).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.deadEnd.bestRound).toEqualTypeOf<number>();
  expect(data.zombies.deadEnd.deaths).toBeDefined();
  expect(data.zombies.deadEnd.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.deadEnd.deaths).toEqualTypeOf<number>();
  expect(data.zombies.deadEnd.doorsOpened).toBeDefined();
  expect(data.zombies.deadEnd.doorsOpened).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.deadEnd.doorsOpened).toEqualTypeOf<number>();
  expect(data.zombies.deadEnd.fastestRound10).toBeDefined();
  expect(data.zombies.deadEnd.fastestRound10).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.deadEnd.fastestRound10).toEqualTypeOf<number>();
  expect(data.zombies.deadEnd.fastestRound20).toBeDefined();
  expect(data.zombies.deadEnd.fastestRound20).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.deadEnd.fastestRound20).toEqualTypeOf<number>();
  expect(data.zombies.deadEnd.fastestRound30).toBeDefined();
  expect(data.zombies.deadEnd.fastestRound30).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.deadEnd.fastestRound30).toEqualTypeOf<number>();
  expect(data.zombies.deadEnd.playersRevived).toBeDefined();
  expect(data.zombies.deadEnd.playersRevived).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.deadEnd.playersRevived).toEqualTypeOf<number>();
  expect(data.zombies.deadEnd.timesKnockedDown).toBeDefined();
  expect(data.zombies.deadEnd.timesKnockedDown).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.deadEnd.timesKnockedDown).toEqualTypeOf<number>();
  expect(data.zombies.deadEnd.roundsSurvived).toBeDefined();
  expect(data.zombies.deadEnd.roundsSurvived).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.deadEnd.roundsSurvived).toEqualTypeOf<number>();
  expect(data.zombies.deadEnd.windowsRepaired).toBeDefined();
  expect(data.zombies.deadEnd.windowsRepaired).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.deadEnd.windowsRepaired).toEqualTypeOf<number>();
  expect(data.zombies.deadEnd.wins).toBeDefined();
  expect(data.zombies.deadEnd.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.deadEnd.wins).toEqualTypeOf<number>();
  expect(data.zombies.deadEnd.zombieKills).toBeDefined();
  expect(data.zombies.deadEnd.zombieKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.deadEnd.zombieKills).toEqualTypeOf<number>();
  expect(data.zombies.badBlood).toBeDefined();
  expectTypeOf(data.zombies.badBlood).toEqualTypeOf<ZombiesStats>();
  expect(data.zombies.badBlood.bestRound).toBeDefined();
  expect(data.zombies.badBlood.bestRound).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.badBlood.bestRound).toEqualTypeOf<number>();
  expect(data.zombies.badBlood.deaths).toBeDefined();
  expect(data.zombies.badBlood.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.badBlood.deaths).toEqualTypeOf<number>();
  expect(data.zombies.badBlood.doorsOpened).toBeDefined();
  expect(data.zombies.badBlood.doorsOpened).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.badBlood.doorsOpened).toEqualTypeOf<number>();
  expect(data.zombies.badBlood.fastestRound10).toBeDefined();
  expect(data.zombies.badBlood.fastestRound10).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.badBlood.fastestRound10).toEqualTypeOf<number>();
  expect(data.zombies.badBlood.fastestRound20).toBeDefined();
  expect(data.zombies.badBlood.fastestRound20).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.badBlood.fastestRound20).toEqualTypeOf<number>();
  expect(data.zombies.badBlood.fastestRound30).toBeDefined();
  expect(data.zombies.badBlood.fastestRound30).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.badBlood.fastestRound30).toEqualTypeOf<number>();
  expect(data.zombies.badBlood.playersRevived).toBeDefined();
  expect(data.zombies.badBlood.playersRevived).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.badBlood.playersRevived).toEqualTypeOf<number>();
  expect(data.zombies.badBlood.timesKnockedDown).toBeDefined();
  expect(data.zombies.badBlood.timesKnockedDown).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.badBlood.timesKnockedDown).toEqualTypeOf<number>();
  expect(data.zombies.badBlood.roundsSurvived).toBeDefined();
  expect(data.zombies.badBlood.roundsSurvived).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.badBlood.roundsSurvived).toEqualTypeOf<number>();
  expect(data.zombies.badBlood.windowsRepaired).toBeDefined();
  expect(data.zombies.badBlood.windowsRepaired).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.badBlood.windowsRepaired).toEqualTypeOf<number>();
  expect(data.zombies.badBlood.wins).toBeDefined();
  expect(data.zombies.badBlood.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.badBlood.wins).toEqualTypeOf<number>();
  expect(data.zombies.badBlood.zombieKills).toBeDefined();
  expect(data.zombies.badBlood.zombieKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.badBlood.zombieKills).toEqualTypeOf<number>();
  expect(data.zombies.alienArcadium).toBeDefined();
  expectTypeOf(data.zombies.alienArcadium).toEqualTypeOf<ZombiesStats>();
  expect(data.zombies.alienArcadium.bestRound).toBeDefined();
  expect(data.zombies.alienArcadium.bestRound).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.alienArcadium.bestRound).toEqualTypeOf<number>();
  expect(data.zombies.alienArcadium.deaths).toBeDefined();
  expect(data.zombies.alienArcadium.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.alienArcadium.deaths).toEqualTypeOf<number>();
  expect(data.zombies.alienArcadium.doorsOpened).toBeDefined();
  expect(data.zombies.alienArcadium.doorsOpened).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.alienArcadium.doorsOpened).toEqualTypeOf<number>();
  expect(data.zombies.alienArcadium.fastestRound10).toBeDefined();
  expect(data.zombies.alienArcadium.fastestRound10).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.alienArcadium.fastestRound10).toEqualTypeOf<number>();
  expect(data.zombies.alienArcadium.fastestRound20).toBeDefined();
  expect(data.zombies.alienArcadium.fastestRound20).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.alienArcadium.fastestRound20).toEqualTypeOf<number>();
  expect(data.zombies.alienArcadium.fastestRound30).toBeDefined();
  expect(data.zombies.alienArcadium.fastestRound30).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.alienArcadium.fastestRound30).toEqualTypeOf<number>();
  expect(data.zombies.alienArcadium.playersRevived).toBeDefined();
  expect(data.zombies.alienArcadium.playersRevived).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.alienArcadium.playersRevived).toEqualTypeOf<number>();
  expect(data.zombies.alienArcadium.timesKnockedDown).toBeDefined();
  expect(data.zombies.alienArcadium.timesKnockedDown).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.alienArcadium.timesKnockedDown).toEqualTypeOf<number>();
  expect(data.zombies.alienArcadium.roundsSurvived).toBeDefined();
  expect(data.zombies.alienArcadium.roundsSurvived).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.alienArcadium.roundsSurvived).toEqualTypeOf<number>();
  expect(data.zombies.alienArcadium.windowsRepaired).toBeDefined();
  expect(data.zombies.alienArcadium.windowsRepaired).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.alienArcadium.windowsRepaired).toEqualTypeOf<number>();
  expect(data.zombies.alienArcadium.wins).toBeDefined();
  expect(data.zombies.alienArcadium.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.alienArcadium.wins).toEqualTypeOf<number>();
  expect(data.zombies.alienArcadium.zombieKills).toBeDefined();
  expect(data.zombies.alienArcadium.zombieKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.alienArcadium.zombieKills).toEqualTypeOf<number>();
  expect(data.zombies.prison).toBeDefined();
  expectTypeOf(data.zombies.prison).toEqualTypeOf<ZombiesStats>();
  expect(data.zombies.prison.bestRound).toBeDefined();
  expect(data.zombies.prison.bestRound).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.prison.bestRound).toEqualTypeOf<number>();
  expect(data.zombies.prison.deaths).toBeDefined();
  expect(data.zombies.prison.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.prison.deaths).toEqualTypeOf<number>();
  expect(data.zombies.prison.doorsOpened).toBeDefined();
  expect(data.zombies.prison.doorsOpened).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.prison.doorsOpened).toEqualTypeOf<number>();
  expect(data.zombies.prison.fastestRound10).toBeDefined();
  expect(data.zombies.prison.fastestRound10).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.prison.fastestRound10).toEqualTypeOf<number>();
  expect(data.zombies.prison.fastestRound20).toBeDefined();
  expect(data.zombies.prison.fastestRound20).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.prison.fastestRound20).toEqualTypeOf<number>();
  expect(data.zombies.prison.fastestRound30).toBeDefined();
  expect(data.zombies.prison.fastestRound30).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.prison.fastestRound30).toEqualTypeOf<number>();
  expect(data.zombies.prison.playersRevived).toBeDefined();
  expect(data.zombies.prison.playersRevived).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.prison.playersRevived).toEqualTypeOf<number>();
  expect(data.zombies.prison.timesKnockedDown).toBeDefined();
  expect(data.zombies.prison.timesKnockedDown).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.prison.timesKnockedDown).toEqualTypeOf<number>();
  expect(data.zombies.prison.roundsSurvived).toBeDefined();
  expect(data.zombies.prison.roundsSurvived).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.prison.roundsSurvived).toEqualTypeOf<number>();
  expect(data.zombies.prison.windowsRepaired).toBeDefined();
  expect(data.zombies.prison.windowsRepaired).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.prison.windowsRepaired).toEqualTypeOf<number>();
  expect(data.zombies.prison.wins).toBeDefined();
  expect(data.zombies.prison.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.prison.wins).toEqualTypeOf<number>();
  expect(data.zombies.prison.zombieKills).toBeDefined();
  expect(data.zombies.prison.zombieKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.prison.zombieKills).toEqualTypeOf<number>();
  expect(data.zombies.killsByZombie).toBeDefined();
  expectTypeOf(data.zombies.killsByZombie).toEqualTypeOf<Record<string, number>>();
  expect(data.zombies.bulletsHit).toBeDefined();
  expect(data.zombies.bulletsHit).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.bulletsHit).toEqualTypeOf<number>();
  expect(data.zombies.bulletsShot).toBeDefined();
  expect(data.zombies.bulletsShot).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.bulletsShot).toEqualTypeOf<number>();
  expect(data.zombies.gunAccuracy).toBeDefined();
  expect(data.zombies.gunAccuracy).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.gunAccuracy).toEqualTypeOf<number>();
  expect(data.zombies.headshots).toBeDefined();
  expect(data.zombies.headshots).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.headshots).toEqualTypeOf<number>();
  expect(data.zombies.headshotAccuracy).toBeDefined();
  expect(data.zombies.headshotAccuracy).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombies.headshotAccuracy).toEqualTypeOf<number>();
});
