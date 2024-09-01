import WoolWars, { WoolWarsPrivateGamesConfig, WoolWarsStats } from './WoolWars';
import { expect, expectTypeOf, test } from 'vitest';

test('WoolWars', () => {
  const data = new WoolWars({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(WoolWars);
  expectTypeOf(data).toEqualTypeOf<WoolWars>();
  expect(data.layers).toBeDefined();
  expect(data.layers).greaterThanOrEqual(0);
  expectTypeOf(data.layers).toEqualTypeOf<number>();
  expect(data.xp).toBeDefined();
  expect(data.xp).greaterThanOrEqual(0);
  expectTypeOf(data.xp).toEqualTypeOf<number>();
  expect(data.exactLevel).toBeDefined();
  expect(data.exactLevel).greaterThanOrEqual(0);
  expectTypeOf(data.exactLevel).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expect(data.level).greaterThanOrEqual(0);
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.coins).toBeDefined();
  expect(data.coins).greaterThanOrEqual(0);
  expectTypeOf(data.coins).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).greaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.gamesPlayed).toBeDefined();
  expect(data.gamesPlayed).greaterThanOrEqual(0);
  expectTypeOf(data.gamesPlayed).toEqualTypeOf<number>();
  expect(data.woolsPlaced).toBeDefined();
  expect(data.woolsPlaced).greaterThanOrEqual(0);
  expectTypeOf(data.woolsPlaced).toEqualTypeOf<number>();
  expect(data.blocksBroken).toBeDefined();
  expect(data.blocksBroken).greaterThanOrEqual(0);
  expectTypeOf(data.blocksBroken).toEqualTypeOf<number>();
  expect(data.placeBreakRatio).toBeDefined();
  expect(data.placeBreakRatio).greaterThanOrEqual(0);
  expectTypeOf(data.placeBreakRatio).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).greaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.KDR).toBeDefined();
  expect(data.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.assists).toBeDefined();
  expect(data.assists).greaterThanOrEqual(0);
  expectTypeOf(data.assists).toEqualTypeOf<number>();
  expect(data.powerups).toBeDefined();
  expect(data.powerups).greaterThanOrEqual(0);
  expectTypeOf(data.powerups).toEqualTypeOf<number>();
  expect(data.selectedClass).toBeDefined();
  expectTypeOf(data.selectedClass).toEqualTypeOf<
    'ASSAULT' | 'TANK' | 'GOLEM' | 'SWORDSMAN' | 'ENGINEER' | 'ARCHER' | 'NONE'
  >();
  expect(data.assault).toBeDefined();
  expectTypeOf(data.assault).toEqualTypeOf<WoolWarsStats>();
  expect(data.assault.wins).toBeDefined();
  expect(data.assault.wins).greaterThanOrEqual(0);
  expectTypeOf(data.assault.wins).toEqualTypeOf<number>();
  expect(data.assault.gamesPlayed).toBeDefined();
  expect(data.assault.gamesPlayed).greaterThanOrEqual(0);
  expectTypeOf(data.assault.gamesPlayed).toEqualTypeOf<number>();
  expect(data.assault.woolsPlaced).toBeDefined();
  expect(data.assault.woolsPlaced).greaterThanOrEqual(0);
  expectTypeOf(data.assault.woolsPlaced).toEqualTypeOf<number>();
  expect(data.assault.blocksBroken).toBeDefined();
  expect(data.assault.blocksBroken).greaterThanOrEqual(0);
  expectTypeOf(data.assault.blocksBroken).toEqualTypeOf<number>();
  expect(data.assault.placeBreakRatio).toBeDefined();
  expect(data.assault.placeBreakRatio).greaterThanOrEqual(0);
  expectTypeOf(data.assault.placeBreakRatio).toEqualTypeOf<number>();
  expect(data.assault.kills).toBeDefined();
  expect(data.assault.kills).greaterThanOrEqual(0);
  expectTypeOf(data.assault.kills).toEqualTypeOf<number>();
  expect(data.assault.deaths).toBeDefined();
  expect(data.assault.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.assault.deaths).toEqualTypeOf<number>();
  expect(data.assault.KDR).toBeDefined();
  expect(data.assault.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.assault.KDR).toEqualTypeOf<number>();
  expect(data.assault.assists).toBeDefined();
  expect(data.assault.assists).greaterThanOrEqual(0);
  expectTypeOf(data.assault.assists).toEqualTypeOf<number>();
  expect(data.assault.powerups).toBeDefined();
  expect(data.assault.powerups).greaterThanOrEqual(0);
  expectTypeOf(data.assault.powerups).toEqualTypeOf<number>();
  expect(data.tank).toBeDefined();
  expectTypeOf(data.tank).toEqualTypeOf<WoolWarsStats>();
  expect(data.tank.wins).toBeDefined();
  expect(data.tank.wins).greaterThanOrEqual(0);
  expectTypeOf(data.tank.wins).toEqualTypeOf<number>();
  expect(data.tank.gamesPlayed).toBeDefined();
  expect(data.tank.gamesPlayed).greaterThanOrEqual(0);
  expectTypeOf(data.tank.gamesPlayed).toEqualTypeOf<number>();
  expect(data.tank.woolsPlaced).toBeDefined();
  expect(data.tank.woolsPlaced).greaterThanOrEqual(0);
  expectTypeOf(data.tank.woolsPlaced).toEqualTypeOf<number>();
  expect(data.tank.blocksBroken).toBeDefined();
  expect(data.tank.blocksBroken).greaterThanOrEqual(0);
  expectTypeOf(data.tank.blocksBroken).toEqualTypeOf<number>();
  expect(data.tank.placeBreakRatio).toBeDefined();
  expect(data.tank.placeBreakRatio).greaterThanOrEqual(0);
  expectTypeOf(data.tank.placeBreakRatio).toEqualTypeOf<number>();
  expect(data.tank.kills).toBeDefined();
  expect(data.tank.kills).greaterThanOrEqual(0);
  expectTypeOf(data.tank.kills).toEqualTypeOf<number>();
  expect(data.tank.deaths).toBeDefined();
  expect(data.tank.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.tank.deaths).toEqualTypeOf<number>();
  expect(data.tank.KDR).toBeDefined();
  expect(data.tank.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.tank.KDR).toEqualTypeOf<number>();
  expect(data.tank.assists).toBeDefined();
  expect(data.tank.assists).greaterThanOrEqual(0);
  expectTypeOf(data.tank.assists).toEqualTypeOf<number>();
  expect(data.tank.powerups).toBeDefined();
  expect(data.tank.powerups).greaterThanOrEqual(0);
  expectTypeOf(data.tank.powerups).toEqualTypeOf<number>();
  expect(data.golem).toBeDefined();
  expectTypeOf(data.golem).toEqualTypeOf<WoolWarsStats>();
  expect(data.golem.wins).toBeDefined();
  expect(data.golem.wins).greaterThanOrEqual(0);
  expectTypeOf(data.golem.wins).toEqualTypeOf<number>();
  expect(data.golem.gamesPlayed).toBeDefined();
  expect(data.golem.gamesPlayed).greaterThanOrEqual(0);
  expectTypeOf(data.golem.gamesPlayed).toEqualTypeOf<number>();
  expect(data.golem.woolsPlaced).toBeDefined();
  expect(data.golem.woolsPlaced).greaterThanOrEqual(0);
  expectTypeOf(data.golem.woolsPlaced).toEqualTypeOf<number>();
  expect(data.golem.blocksBroken).toBeDefined();
  expect(data.golem.blocksBroken).greaterThanOrEqual(0);
  expectTypeOf(data.golem.blocksBroken).toEqualTypeOf<number>();
  expect(data.golem.placeBreakRatio).toBeDefined();
  expect(data.golem.placeBreakRatio).greaterThanOrEqual(0);
  expectTypeOf(data.golem.placeBreakRatio).toEqualTypeOf<number>();
  expect(data.golem.kills).toBeDefined();
  expect(data.golem.kills).greaterThanOrEqual(0);
  expectTypeOf(data.golem.kills).toEqualTypeOf<number>();
  expect(data.golem.deaths).toBeDefined();
  expect(data.golem.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.golem.deaths).toEqualTypeOf<number>();
  expect(data.golem.KDR).toBeDefined();
  expect(data.golem.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.golem.KDR).toEqualTypeOf<number>();
  expect(data.golem.assists).toBeDefined();
  expect(data.golem.assists).greaterThanOrEqual(0);
  expectTypeOf(data.golem.assists).toEqualTypeOf<number>();
  expect(data.golem.powerups).toBeDefined();
  expect(data.golem.powerups).greaterThanOrEqual(0);
  expectTypeOf(data.golem.powerups).toEqualTypeOf<number>();
  expect(data.swordsman).toBeDefined();
  expectTypeOf(data.swordsman).toEqualTypeOf<WoolWarsStats>();
  expect(data.swordsman.wins).toBeDefined();
  expect(data.swordsman.wins).greaterThanOrEqual(0);
  expectTypeOf(data.swordsman.wins).toEqualTypeOf<number>();
  expect(data.swordsman.gamesPlayed).toBeDefined();
  expect(data.swordsman.gamesPlayed).greaterThanOrEqual(0);
  expectTypeOf(data.swordsman.gamesPlayed).toEqualTypeOf<number>();
  expect(data.swordsman.woolsPlaced).toBeDefined();
  expect(data.swordsman.woolsPlaced).greaterThanOrEqual(0);
  expectTypeOf(data.swordsman.woolsPlaced).toEqualTypeOf<number>();
  expect(data.swordsman.blocksBroken).toBeDefined();
  expect(data.swordsman.blocksBroken).greaterThanOrEqual(0);
  expectTypeOf(data.swordsman.blocksBroken).toEqualTypeOf<number>();
  expect(data.swordsman.placeBreakRatio).toBeDefined();
  expect(data.swordsman.placeBreakRatio).greaterThanOrEqual(0);
  expectTypeOf(data.swordsman.placeBreakRatio).toEqualTypeOf<number>();
  expect(data.swordsman.kills).toBeDefined();
  expect(data.swordsman.kills).greaterThanOrEqual(0);
  expectTypeOf(data.swordsman.kills).toEqualTypeOf<number>();
  expect(data.swordsman.deaths).toBeDefined();
  expect(data.swordsman.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.swordsman.deaths).toEqualTypeOf<number>();
  expect(data.swordsman.KDR).toBeDefined();
  expect(data.swordsman.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.swordsman.KDR).toEqualTypeOf<number>();
  expect(data.swordsman.assists).toBeDefined();
  expect(data.swordsman.assists).greaterThanOrEqual(0);
  expectTypeOf(data.swordsman.assists).toEqualTypeOf<number>();
  expect(data.swordsman.powerups).toBeDefined();
  expect(data.swordsman.powerups).greaterThanOrEqual(0);
  expectTypeOf(data.swordsman.powerups).toEqualTypeOf<number>();
  expect(data.engineer).toBeDefined();
  expectTypeOf(data.engineer).toEqualTypeOf<WoolWarsStats>();
  expect(data.engineer.wins).toBeDefined();
  expect(data.engineer.wins).greaterThanOrEqual(0);
  expectTypeOf(data.engineer.wins).toEqualTypeOf<number>();
  expect(data.engineer.gamesPlayed).toBeDefined();
  expect(data.engineer.gamesPlayed).greaterThanOrEqual(0);
  expectTypeOf(data.engineer.gamesPlayed).toEqualTypeOf<number>();
  expect(data.engineer.woolsPlaced).toBeDefined();
  expect(data.engineer.woolsPlaced).greaterThanOrEqual(0);
  expectTypeOf(data.engineer.woolsPlaced).toEqualTypeOf<number>();
  expect(data.engineer.blocksBroken).toBeDefined();
  expect(data.engineer.blocksBroken).greaterThanOrEqual(0);
  expectTypeOf(data.engineer.blocksBroken).toEqualTypeOf<number>();
  expect(data.engineer.placeBreakRatio).toBeDefined();
  expect(data.engineer.placeBreakRatio).greaterThanOrEqual(0);
  expectTypeOf(data.engineer.placeBreakRatio).toEqualTypeOf<number>();
  expect(data.engineer.kills).toBeDefined();
  expect(data.engineer.kills).greaterThanOrEqual(0);
  expectTypeOf(data.engineer.kills).toEqualTypeOf<number>();
  expect(data.engineer.deaths).toBeDefined();
  expect(data.engineer.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.engineer.deaths).toEqualTypeOf<number>();
  expect(data.engineer.KDR).toBeDefined();
  expect(data.engineer.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.engineer.KDR).toEqualTypeOf<number>();
  expect(data.engineer.assists).toBeDefined();
  expect(data.engineer.assists).greaterThanOrEqual(0);
  expectTypeOf(data.engineer.assists).toEqualTypeOf<number>();
  expect(data.engineer.powerups).toBeDefined();
  expect(data.engineer.powerups).greaterThanOrEqual(0);
  expectTypeOf(data.engineer.powerups).toEqualTypeOf<number>();
  expect(data.archer).toBeDefined();
  expectTypeOf(data.archer).toEqualTypeOf<WoolWarsStats>();
  expect(data.archer.wins).toBeDefined();
  expect(data.archer.wins).greaterThanOrEqual(0);
  expectTypeOf(data.archer.wins).toEqualTypeOf<number>();
  expect(data.archer.gamesPlayed).toBeDefined();
  expect(data.archer.gamesPlayed).greaterThanOrEqual(0);
  expectTypeOf(data.archer.gamesPlayed).toEqualTypeOf<number>();
  expect(data.archer.woolsPlaced).toBeDefined();
  expect(data.archer.woolsPlaced).greaterThanOrEqual(0);
  expectTypeOf(data.archer.woolsPlaced).toEqualTypeOf<number>();
  expect(data.archer.blocksBroken).toBeDefined();
  expect(data.archer.blocksBroken).greaterThanOrEqual(0);
  expectTypeOf(data.archer.blocksBroken).toEqualTypeOf<number>();
  expect(data.archer.placeBreakRatio).toBeDefined();
  expect(data.archer.placeBreakRatio).greaterThanOrEqual(0);
  expectTypeOf(data.archer.placeBreakRatio).toEqualTypeOf<number>();
  expect(data.archer.kills).toBeDefined();
  expect(data.archer.kills).greaterThanOrEqual(0);
  expectTypeOf(data.archer.kills).toEqualTypeOf<number>();
  expect(data.archer.deaths).toBeDefined();
  expect(data.archer.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.archer.deaths).toEqualTypeOf<number>();
  expect(data.archer.KDR).toBeDefined();
  expect(data.archer.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.archer.KDR).toEqualTypeOf<number>();
  expect(data.archer.assists).toBeDefined();
  expect(data.archer.assists).greaterThanOrEqual(0);
  expectTypeOf(data.archer.assists).toEqualTypeOf<number>();
  expect(data.archer.powerups).toBeDefined();
  expect(data.archer.powerups).greaterThanOrEqual(0);
  expectTypeOf(data.archer.powerups).toEqualTypeOf<number>();
  expect(data.ownedCosmetics).toBeDefined();
  expectTypeOf(data.ownedCosmetics).toEqualTypeOf<string[]>();
  expect(data.privateGamesConfig).toBeDefined();
  expectTypeOf(data.privateGamesConfig).toEqualTypeOf<WoolWarsPrivateGamesConfig>();
});
