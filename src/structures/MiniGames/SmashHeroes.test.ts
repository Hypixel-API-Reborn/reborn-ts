import SmashHeroes, { SmashHeoresHero, SmashHeroesMode } from './SmashHeroes';
import { expect, expectTypeOf, test } from 'vitest';

test('SmashHeroes', () => {
  const data = new SmashHeroes({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SmashHeroes);
  expectTypeOf(data).toEqualTypeOf<SmashHeroes>();
  expect(data.coins).toBeDefined();
  expect(data.coins).greaterThanOrEqual(0);
  expectTypeOf(data.coins).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expect(data.level).greaterThanOrEqual(0);
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.winstreak).toBeDefined();
  expect(data.winstreak).greaterThanOrEqual(0);
  expectTypeOf(data.winstreak).toEqualTypeOf<number>();
  expect(data.playedGames).toBeDefined();
  expect(data.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.playedGames).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).greaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.KDR).toBeDefined();
  expect(data.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).greaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.losses).toBeDefined();
  expect(data.losses).greaterThanOrEqual(0);
  expectTypeOf(data.losses).toEqualTypeOf<number>();
  expect(data.WLR).toBeDefined();
  expect(data.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.WLR).toEqualTypeOf<number>();
  expect(data.smashed).toBeDefined();
  expect(data.smashed).greaterThanOrEqual(0);
  expectTypeOf(data.smashed).toEqualTypeOf<number>();
  expect(data['1v1v1v1']).toBeDefined();
  expectTypeOf(data['1v1v1v1']).toEqualTypeOf<SmashHeroesMode>();
  expect(data['1v1v1v1'].kills).toBeDefined();
  expect(data['1v1v1v1'].kills).greaterThanOrEqual(0);
  expectTypeOf(data['1v1v1v1'].kills).toEqualTypeOf<number>();
  expect(data['1v1v1v1'].deaths).toBeDefined();
  expect(data['1v1v1v1'].deaths).greaterThanOrEqual(0);
  expectTypeOf(data['1v1v1v1'].deaths).toEqualTypeOf<number>();
  expect(data['1v1v1v1'].KDR).toBeDefined();
  expect(data['1v1v1v1'].KDR).greaterThanOrEqual(0);
  expectTypeOf(data['1v1v1v1'].KDR).toEqualTypeOf<number>();
  expect(data['1v1v1v1'].wins).toBeDefined();
  expect(data['1v1v1v1'].wins).greaterThanOrEqual(0);
  expectTypeOf(data['1v1v1v1'].wins).toEqualTypeOf<number>();
  expect(data['1v1v1v1'].losses).toBeDefined();
  expect(data['1v1v1v1'].losses).greaterThanOrEqual(0);
  expectTypeOf(data['1v1v1v1'].losses).toEqualTypeOf<number>();
  expect(data['1v1v1v1'].WLR).toBeDefined();
  expect(data['1v1v1v1'].WLR).greaterThanOrEqual(0);
  expectTypeOf(data['1v1v1v1'].WLR).toEqualTypeOf<number>();
  expect(data['2v2']).toBeDefined();
  expectTypeOf(data['2v2']).toEqualTypeOf<SmashHeroesMode>();
  expect(data['2v2'].kills).toBeDefined();
  expect(data['2v2'].kills).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].kills).toEqualTypeOf<number>();
  expect(data['2v2'].deaths).toBeDefined();
  expect(data['2v2'].deaths).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].deaths).toEqualTypeOf<number>();
  expect(data['2v2'].KDR).toBeDefined();
  expect(data['2v2'].KDR).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].KDR).toEqualTypeOf<number>();
  expect(data['2v2'].wins).toBeDefined();
  expect(data['2v2'].wins).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].wins).toEqualTypeOf<number>();
  expect(data['2v2'].losses).toBeDefined();
  expect(data['2v2'].losses).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].losses).toEqualTypeOf<number>();
  expect(data['2v2'].WLR).toBeDefined();
  expect(data['2v2'].WLR).greaterThanOrEqual(0);
  expectTypeOf(data['2v2'].WLR).toEqualTypeOf<number>();
  expect(data['2v2v2']).toBeDefined();
  expectTypeOf(data['2v2v2']).toEqualTypeOf<SmashHeroesMode>();
  expect(data['2v2v2'].kills).toBeDefined();
  expect(data['2v2v2'].kills).greaterThanOrEqual(0);
  expectTypeOf(data['2v2v2'].kills).toEqualTypeOf<number>();
  expect(data['2v2v2'].deaths).toBeDefined();
  expect(data['2v2v2'].deaths).greaterThanOrEqual(0);
  expectTypeOf(data['2v2v2'].deaths).toEqualTypeOf<number>();
  expect(data['2v2v2'].KDR).toBeDefined();
  expect(data['2v2v2'].KDR).greaterThanOrEqual(0);
  expectTypeOf(data['2v2v2'].KDR).toEqualTypeOf<number>();
  expect(data['2v2v2'].wins).toBeDefined();
  expect(data['2v2v2'].wins).greaterThanOrEqual(0);
  expectTypeOf(data['2v2v2'].wins).toEqualTypeOf<number>();
  expect(data['2v2v2'].losses).toBeDefined();
  expect(data['2v2v2'].losses).greaterThanOrEqual(0);
  expectTypeOf(data['2v2v2'].losses).toEqualTypeOf<number>();
  expect(data['2v2v2'].WLR).toBeDefined();
  expect(data['2v2v2'].WLR).greaterThanOrEqual(0);
  expectTypeOf(data['2v2v2'].WLR).toEqualTypeOf<number>();
  expect(data.activeClass).toBeDefined();
  expectTypeOf(data.activeClass).toEqualTypeOf<string>();
  expect(data.theBulk).toBeDefined();
  expectTypeOf(data.theBulk).toEqualTypeOf<SmashHeoresHero>();
  expect(data.theBulk.name).toBeDefined();
  expectTypeOf(data.theBulk.name).toEqualTypeOf<string>();
  expect(data.theBulk.level).toBeDefined();
  expect(data.theBulk.level).greaterThanOrEqual(0);
  expectTypeOf(data.theBulk.level).toEqualTypeOf<number>();
  expect(data.theBulk.xp).toBeDefined();
  expect(data.theBulk.xp).greaterThanOrEqual(0);
  expectTypeOf(data.theBulk.xp).toEqualTypeOf<number>();
  expect(data.theBulk.prestige).toBeDefined();
  expect(data.theBulk.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.theBulk.prestige).toEqualTypeOf<number>();
  expect(data.theBulk.playedGames).toBeDefined();
  expect(data.theBulk.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.theBulk.playedGames).toEqualTypeOf<number>();
  expect(data.theBulk.kills).toBeDefined();
  expect(data.theBulk.kills).greaterThanOrEqual(0);
  expectTypeOf(data.theBulk.kills).toEqualTypeOf<number>();
  expect(data.theBulk.deaths).toBeDefined();
  expect(data.theBulk.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.theBulk.deaths).toEqualTypeOf<number>();
  expect(data.theBulk.KDR).toBeDefined();
  expect(data.theBulk.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.theBulk.KDR).toEqualTypeOf<number>();
  expect(data.theBulk.wins).toBeDefined();
  expect(data.theBulk.wins).greaterThanOrEqual(0);
  expectTypeOf(data.theBulk.wins).toEqualTypeOf<number>();
  expect(data.theBulk.losses).toBeDefined();
  expect(data.theBulk.losses).greaterThanOrEqual(0);
  expectTypeOf(data.theBulk.losses).toEqualTypeOf<number>();
  expect(data.theBulk.WLR).toBeDefined();
  expect(data.theBulk.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.theBulk.WLR).toEqualTypeOf<number>();
  expect(data.cakeMonster).toBeDefined();
  expectTypeOf(data.cakeMonster).toEqualTypeOf<SmashHeoresHero>();
  expect(data.cakeMonster.name).toBeDefined();
  expectTypeOf(data.cakeMonster.name).toEqualTypeOf<string>();
  expect(data.cakeMonster.level).toBeDefined();
  expect(data.cakeMonster.level).greaterThanOrEqual(0);
  expectTypeOf(data.cakeMonster.level).toEqualTypeOf<number>();
  expect(data.cakeMonster.xp).toBeDefined();
  expect(data.cakeMonster.xp).greaterThanOrEqual(0);
  expectTypeOf(data.cakeMonster.xp).toEqualTypeOf<number>();
  expect(data.cakeMonster.prestige).toBeDefined();
  expect(data.cakeMonster.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.cakeMonster.prestige).toEqualTypeOf<number>();
  expect(data.cakeMonster.playedGames).toBeDefined();
  expect(data.cakeMonster.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.cakeMonster.playedGames).toEqualTypeOf<number>();
  expect(data.cakeMonster.kills).toBeDefined();
  expect(data.cakeMonster.kills).greaterThanOrEqual(0);
  expectTypeOf(data.cakeMonster.kills).toEqualTypeOf<number>();
  expect(data.cakeMonster.deaths).toBeDefined();
  expect(data.cakeMonster.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.cakeMonster.deaths).toEqualTypeOf<number>();
  expect(data.cakeMonster.KDR).toBeDefined();
  expect(data.cakeMonster.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.cakeMonster.KDR).toEqualTypeOf<number>();
  expect(data.cakeMonster.wins).toBeDefined();
  expect(data.cakeMonster.wins).greaterThanOrEqual(0);
  expectTypeOf(data.cakeMonster.wins).toEqualTypeOf<number>();
  expect(data.cakeMonster.losses).toBeDefined();
  expect(data.cakeMonster.losses).greaterThanOrEqual(0);
  expectTypeOf(data.cakeMonster.losses).toEqualTypeOf<number>();
  expect(data.cakeMonster.WLR).toBeDefined();
  expect(data.cakeMonster.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.cakeMonster.WLR).toEqualTypeOf<number>();
  expect(data.generalCluck).toBeDefined();
  expectTypeOf(data.generalCluck).toEqualTypeOf<SmashHeoresHero>();
  expect(data.generalCluck.name).toBeDefined();
  expectTypeOf(data.generalCluck.name).toEqualTypeOf<string>();
  expect(data.generalCluck.level).toBeDefined();
  expect(data.generalCluck.level).greaterThanOrEqual(0);
  expectTypeOf(data.generalCluck.level).toEqualTypeOf<number>();
  expect(data.generalCluck.xp).toBeDefined();
  expect(data.generalCluck.xp).greaterThanOrEqual(0);
  expectTypeOf(data.generalCluck.xp).toEqualTypeOf<number>();
  expect(data.generalCluck.prestige).toBeDefined();
  expect(data.generalCluck.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.generalCluck.prestige).toEqualTypeOf<number>();
  expect(data.generalCluck.playedGames).toBeDefined();
  expect(data.generalCluck.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.generalCluck.playedGames).toEqualTypeOf<number>();
  expect(data.generalCluck.kills).toBeDefined();
  expect(data.generalCluck.kills).greaterThanOrEqual(0);
  expectTypeOf(data.generalCluck.kills).toEqualTypeOf<number>();
  expect(data.generalCluck.deaths).toBeDefined();
  expect(data.generalCluck.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.generalCluck.deaths).toEqualTypeOf<number>();
  expect(data.generalCluck.KDR).toBeDefined();
  expect(data.generalCluck.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.generalCluck.KDR).toEqualTypeOf<number>();
  expect(data.generalCluck.wins).toBeDefined();
  expect(data.generalCluck.wins).greaterThanOrEqual(0);
  expectTypeOf(data.generalCluck.wins).toEqualTypeOf<number>();
  expect(data.generalCluck.losses).toBeDefined();
  expect(data.generalCluck.losses).greaterThanOrEqual(0);
  expectTypeOf(data.generalCluck.losses).toEqualTypeOf<number>();
  expect(data.generalCluck.WLR).toBeDefined();
  expect(data.generalCluck.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.generalCluck.WLR).toEqualTypeOf<number>();
  expect(data.botmun).toBeDefined();
  expectTypeOf(data.botmun).toEqualTypeOf<SmashHeoresHero>();
  expect(data.botmun.name).toBeDefined();
  expectTypeOf(data.botmun.name).toEqualTypeOf<string>();
  expect(data.botmun.level).toBeDefined();
  expect(data.botmun.level).greaterThanOrEqual(0);
  expectTypeOf(data.botmun.level).toEqualTypeOf<number>();
  expect(data.botmun.xp).toBeDefined();
  expect(data.botmun.xp).greaterThanOrEqual(0);
  expectTypeOf(data.botmun.xp).toEqualTypeOf<number>();
  expect(data.botmun.prestige).toBeDefined();
  expect(data.botmun.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.botmun.prestige).toEqualTypeOf<number>();
  expect(data.botmun.playedGames).toBeDefined();
  expect(data.botmun.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.botmun.playedGames).toEqualTypeOf<number>();
  expect(data.botmun.kills).toBeDefined();
  expect(data.botmun.kills).greaterThanOrEqual(0);
  expectTypeOf(data.botmun.kills).toEqualTypeOf<number>();
  expect(data.botmun.deaths).toBeDefined();
  expect(data.botmun.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.botmun.deaths).toEqualTypeOf<number>();
  expect(data.botmun.KDR).toBeDefined();
  expect(data.botmun.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.botmun.KDR).toEqualTypeOf<number>();
  expect(data.botmun.wins).toBeDefined();
  expect(data.botmun.wins).greaterThanOrEqual(0);
  expectTypeOf(data.botmun.wins).toEqualTypeOf<number>();
  expect(data.botmun.losses).toBeDefined();
  expect(data.botmun.losses).greaterThanOrEqual(0);
  expectTypeOf(data.botmun.losses).toEqualTypeOf<number>();
  expect(data.botmun.WLR).toBeDefined();
  expect(data.botmun.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.botmun.WLR).toEqualTypeOf<number>();
  expect(data.marauder).toBeDefined();
  expectTypeOf(data.marauder).toEqualTypeOf<SmashHeoresHero>();
  expect(data.marauder.name).toBeDefined();
  expectTypeOf(data.marauder.name).toEqualTypeOf<string>();
  expect(data.marauder.level).toBeDefined();
  expect(data.marauder.level).greaterThanOrEqual(0);
  expectTypeOf(data.marauder.level).toEqualTypeOf<number>();
  expect(data.marauder.xp).toBeDefined();
  expect(data.marauder.xp).greaterThanOrEqual(0);
  expectTypeOf(data.marauder.xp).toEqualTypeOf<number>();
  expect(data.marauder.prestige).toBeDefined();
  expect(data.marauder.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.marauder.prestige).toEqualTypeOf<number>();
  expect(data.marauder.playedGames).toBeDefined();
  expect(data.marauder.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.marauder.playedGames).toEqualTypeOf<number>();
  expect(data.marauder.kills).toBeDefined();
  expect(data.marauder.kills).greaterThanOrEqual(0);
  expectTypeOf(data.marauder.kills).toEqualTypeOf<number>();
  expect(data.marauder.deaths).toBeDefined();
  expect(data.marauder.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.marauder.deaths).toEqualTypeOf<number>();
  expect(data.marauder.KDR).toBeDefined();
  expect(data.marauder.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.marauder.KDR).toEqualTypeOf<number>();
  expect(data.marauder.wins).toBeDefined();
  expect(data.marauder.wins).greaterThanOrEqual(0);
  expectTypeOf(data.marauder.wins).toEqualTypeOf<number>();
  expect(data.marauder.losses).toBeDefined();
  expect(data.marauder.losses).greaterThanOrEqual(0);
  expectTypeOf(data.marauder.losses).toEqualTypeOf<number>();
  expect(data.marauder.WLR).toBeDefined();
  expect(data.marauder.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.marauder.WLR).toEqualTypeOf<number>();
  expect(data.pug).toBeDefined();
  expectTypeOf(data.pug).toEqualTypeOf<SmashHeoresHero>();
  expect(data.pug.name).toBeDefined();
  expectTypeOf(data.pug.name).toEqualTypeOf<string>();
  expect(data.pug.level).toBeDefined();
  expect(data.pug.level).greaterThanOrEqual(0);
  expectTypeOf(data.pug.level).toEqualTypeOf<number>();
  expect(data.pug.xp).toBeDefined();
  expect(data.pug.xp).greaterThanOrEqual(0);
  expectTypeOf(data.pug.xp).toEqualTypeOf<number>();
  expect(data.pug.prestige).toBeDefined();
  expect(data.pug.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.pug.prestige).toEqualTypeOf<number>();
  expect(data.pug.playedGames).toBeDefined();
  expect(data.pug.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.pug.playedGames).toEqualTypeOf<number>();
  expect(data.pug.kills).toBeDefined();
  expect(data.pug.kills).greaterThanOrEqual(0);
  expectTypeOf(data.pug.kills).toEqualTypeOf<number>();
  expect(data.pug.deaths).toBeDefined();
  expect(data.pug.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.pug.deaths).toEqualTypeOf<number>();
  expect(data.pug.KDR).toBeDefined();
  expect(data.pug.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.pug.KDR).toEqualTypeOf<number>();
  expect(data.pug.wins).toBeDefined();
  expect(data.pug.wins).greaterThanOrEqual(0);
  expectTypeOf(data.pug.wins).toEqualTypeOf<number>();
  expect(data.pug.losses).toBeDefined();
  expect(data.pug.losses).greaterThanOrEqual(0);
  expectTypeOf(data.pug.losses).toEqualTypeOf<number>();
  expect(data.pug.WLR).toBeDefined();
  expect(data.pug.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.pug.WLR).toEqualTypeOf<number>();
  expect(data.tinman).toBeDefined();
  expectTypeOf(data.tinman).toEqualTypeOf<SmashHeoresHero>();
  expect(data.tinman.name).toBeDefined();
  expectTypeOf(data.tinman.name).toEqualTypeOf<string>();
  expect(data.tinman.level).toBeDefined();
  expect(data.tinman.level).greaterThanOrEqual(0);
  expectTypeOf(data.tinman.level).toEqualTypeOf<number>();
  expect(data.tinman.xp).toBeDefined();
  expect(data.tinman.xp).greaterThanOrEqual(0);
  expectTypeOf(data.tinman.xp).toEqualTypeOf<number>();
  expect(data.tinman.prestige).toBeDefined();
  expect(data.tinman.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.tinman.prestige).toEqualTypeOf<number>();
  expect(data.tinman.playedGames).toBeDefined();
  expect(data.tinman.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.tinman.playedGames).toEqualTypeOf<number>();
  expect(data.tinman.kills).toBeDefined();
  expect(data.tinman.kills).greaterThanOrEqual(0);
  expectTypeOf(data.tinman.kills).toEqualTypeOf<number>();
  expect(data.tinman.deaths).toBeDefined();
  expect(data.tinman.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.tinman.deaths).toEqualTypeOf<number>();
  expect(data.tinman.KDR).toBeDefined();
  expect(data.tinman.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.tinman.KDR).toEqualTypeOf<number>();
  expect(data.tinman.wins).toBeDefined();
  expect(data.tinman.wins).greaterThanOrEqual(0);
  expectTypeOf(data.tinman.wins).toEqualTypeOf<number>();
  expect(data.tinman.losses).toBeDefined();
  expect(data.tinman.losses).greaterThanOrEqual(0);
  expectTypeOf(data.tinman.losses).toEqualTypeOf<number>();
  expect(data.tinman.WLR).toBeDefined();
  expect(data.tinman.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.tinman.WLR).toEqualTypeOf<number>();
  expect(data.spoderman).toBeDefined();
  expectTypeOf(data.spoderman).toEqualTypeOf<SmashHeoresHero>();
  expect(data.spoderman.name).toBeDefined();
  expectTypeOf(data.spoderman.name).toEqualTypeOf<string>();
  expect(data.spoderman.level).toBeDefined();
  expect(data.spoderman.level).greaterThanOrEqual(0);
  expectTypeOf(data.spoderman.level).toEqualTypeOf<number>();
  expect(data.spoderman.xp).toBeDefined();
  expect(data.spoderman.xp).greaterThanOrEqual(0);
  expectTypeOf(data.spoderman.xp).toEqualTypeOf<number>();
  expect(data.spoderman.prestige).toBeDefined();
  expect(data.spoderman.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.spoderman.prestige).toEqualTypeOf<number>();
  expect(data.spoderman.playedGames).toBeDefined();
  expect(data.spoderman.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.spoderman.playedGames).toEqualTypeOf<number>();
  expect(data.spoderman.kills).toBeDefined();
  expect(data.spoderman.kills).greaterThanOrEqual(0);
  expectTypeOf(data.spoderman.kills).toEqualTypeOf<number>();
  expect(data.spoderman.deaths).toBeDefined();
  expect(data.spoderman.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.spoderman.deaths).toEqualTypeOf<number>();
  expect(data.spoderman.KDR).toBeDefined();
  expect(data.spoderman.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.spoderman.KDR).toEqualTypeOf<number>();
  expect(data.spoderman.wins).toBeDefined();
  expect(data.spoderman.wins).greaterThanOrEqual(0);
  expectTypeOf(data.spoderman.wins).toEqualTypeOf<number>();
  expect(data.spoderman.losses).toBeDefined();
  expect(data.spoderman.losses).greaterThanOrEqual(0);
  expectTypeOf(data.spoderman.losses).toEqualTypeOf<number>();
  expect(data.spoderman.WLR).toBeDefined();
  expect(data.spoderman.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.spoderman.WLR).toEqualTypeOf<number>();
  expect(data.frosty).toBeDefined();
  expectTypeOf(data.frosty).toEqualTypeOf<SmashHeoresHero>();
  expect(data.frosty.name).toBeDefined();
  expectTypeOf(data.frosty.name).toEqualTypeOf<string>();
  expect(data.frosty.level).toBeDefined();
  expect(data.frosty.level).greaterThanOrEqual(0);
  expectTypeOf(data.frosty.level).toEqualTypeOf<number>();
  expect(data.frosty.xp).toBeDefined();
  expect(data.frosty.xp).greaterThanOrEqual(0);
  expectTypeOf(data.frosty.xp).toEqualTypeOf<number>();
  expect(data.frosty.prestige).toBeDefined();
  expect(data.frosty.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.frosty.prestige).toEqualTypeOf<number>();
  expect(data.frosty.playedGames).toBeDefined();
  expect(data.frosty.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.frosty.playedGames).toEqualTypeOf<number>();
  expect(data.frosty.kills).toBeDefined();
  expect(data.frosty.kills).greaterThanOrEqual(0);
  expectTypeOf(data.frosty.kills).toEqualTypeOf<number>();
  expect(data.frosty.deaths).toBeDefined();
  expect(data.frosty.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.frosty.deaths).toEqualTypeOf<number>();
  expect(data.frosty.KDR).toBeDefined();
  expect(data.frosty.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.frosty.KDR).toEqualTypeOf<number>();
  expect(data.frosty.wins).toBeDefined();
  expect(data.frosty.wins).greaterThanOrEqual(0);
  expectTypeOf(data.frosty.wins).toEqualTypeOf<number>();
  expect(data.frosty.losses).toBeDefined();
  expect(data.frosty.losses).greaterThanOrEqual(0);
  expectTypeOf(data.frosty.losses).toEqualTypeOf<number>();
  expect(data.frosty.WLR).toBeDefined();
  expect(data.frosty.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.frosty.WLR).toEqualTypeOf<number>();
  expect(data.sergeantShield).toBeDefined();
  expectTypeOf(data.sergeantShield).toEqualTypeOf<SmashHeoresHero>();
  expect(data.sergeantShield.name).toBeDefined();
  expectTypeOf(data.sergeantShield.name).toEqualTypeOf<string>();
  expect(data.sergeantShield.level).toBeDefined();
  expect(data.sergeantShield.level).greaterThanOrEqual(0);
  expectTypeOf(data.sergeantShield.level).toEqualTypeOf<number>();
  expect(data.sergeantShield.xp).toBeDefined();
  expect(data.sergeantShield.xp).greaterThanOrEqual(0);
  expectTypeOf(data.sergeantShield.xp).toEqualTypeOf<number>();
  expect(data.sergeantShield.prestige).toBeDefined();
  expect(data.sergeantShield.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.sergeantShield.prestige).toEqualTypeOf<number>();
  expect(data.sergeantShield.playedGames).toBeDefined();
  expect(data.sergeantShield.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.sergeantShield.playedGames).toEqualTypeOf<number>();
  expect(data.sergeantShield.kills).toBeDefined();
  expect(data.sergeantShield.kills).greaterThanOrEqual(0);
  expectTypeOf(data.sergeantShield.kills).toEqualTypeOf<number>();
  expect(data.sergeantShield.deaths).toBeDefined();
  expect(data.sergeantShield.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.sergeantShield.deaths).toEqualTypeOf<number>();
  expect(data.sergeantShield.KDR).toBeDefined();
  expect(data.sergeantShield.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.sergeantShield.KDR).toEqualTypeOf<number>();
  expect(data.sergeantShield.wins).toBeDefined();
  expect(data.sergeantShield.wins).greaterThanOrEqual(0);
  expectTypeOf(data.sergeantShield.wins).toEqualTypeOf<number>();
  expect(data.sergeantShield.losses).toBeDefined();
  expect(data.sergeantShield.losses).greaterThanOrEqual(0);
  expectTypeOf(data.sergeantShield.losses).toEqualTypeOf<number>();
  expect(data.sergeantShield.WLR).toBeDefined();
  expect(data.sergeantShield.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.sergeantShield.WLR).toEqualTypeOf<number>();
  expect(data.skullfire).toBeDefined();
  expectTypeOf(data.skullfire).toEqualTypeOf<SmashHeoresHero>();
  expect(data.skullfire.name).toBeDefined();
  expectTypeOf(data.skullfire.name).toEqualTypeOf<string>();
  expect(data.skullfire.level).toBeDefined();
  expect(data.skullfire.level).greaterThanOrEqual(0);
  expectTypeOf(data.skullfire.level).toEqualTypeOf<number>();
  expect(data.skullfire.xp).toBeDefined();
  expect(data.skullfire.xp).greaterThanOrEqual(0);
  expectTypeOf(data.skullfire.xp).toEqualTypeOf<number>();
  expect(data.skullfire.prestige).toBeDefined();
  expect(data.skullfire.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.skullfire.prestige).toEqualTypeOf<number>();
  expect(data.skullfire.playedGames).toBeDefined();
  expect(data.skullfire.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.skullfire.playedGames).toEqualTypeOf<number>();
  expect(data.skullfire.kills).toBeDefined();
  expect(data.skullfire.kills).greaterThanOrEqual(0);
  expectTypeOf(data.skullfire.kills).toEqualTypeOf<number>();
  expect(data.skullfire.deaths).toBeDefined();
  expect(data.skullfire.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.skullfire.deaths).toEqualTypeOf<number>();
  expect(data.skullfire.KDR).toBeDefined();
  expect(data.skullfire.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.skullfire.KDR).toEqualTypeOf<number>();
  expect(data.skullfire.wins).toBeDefined();
  expect(data.skullfire.wins).greaterThanOrEqual(0);
  expectTypeOf(data.skullfire.wins).toEqualTypeOf<number>();
  expect(data.skullfire.losses).toBeDefined();
  expect(data.skullfire.losses).greaterThanOrEqual(0);
  expectTypeOf(data.skullfire.losses).toEqualTypeOf<number>();
  expect(data.skullfire.WLR).toBeDefined();
  expect(data.skullfire.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.skullfire.WLR).toEqualTypeOf<number>();
  expect(data.goku).toBeDefined();
  expectTypeOf(data.goku).toEqualTypeOf<SmashHeoresHero>();
  expect(data.goku.name).toBeDefined();
  expectTypeOf(data.goku.name).toEqualTypeOf<string>();
  expect(data.goku.level).toBeDefined();
  expect(data.goku.level).greaterThanOrEqual(0);
  expectTypeOf(data.goku.level).toEqualTypeOf<number>();
  expect(data.goku.xp).toBeDefined();
  expect(data.goku.xp).greaterThanOrEqual(0);
  expectTypeOf(data.goku.xp).toEqualTypeOf<number>();
  expect(data.goku.prestige).toBeDefined();
  expect(data.goku.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.goku.prestige).toEqualTypeOf<number>();
  expect(data.goku.playedGames).toBeDefined();
  expect(data.goku.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.goku.playedGames).toEqualTypeOf<number>();
  expect(data.goku.kills).toBeDefined();
  expect(data.goku.kills).greaterThanOrEqual(0);
  expectTypeOf(data.goku.kills).toEqualTypeOf<number>();
  expect(data.goku.deaths).toBeDefined();
  expect(data.goku.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.goku.deaths).toEqualTypeOf<number>();
  expect(data.goku.KDR).toBeDefined();
  expect(data.goku.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.goku.KDR).toEqualTypeOf<number>();
  expect(data.goku.wins).toBeDefined();
  expect(data.goku.wins).greaterThanOrEqual(0);
  expectTypeOf(data.goku.wins).toEqualTypeOf<number>();
  expect(data.goku.losses).toBeDefined();
  expect(data.goku.losses).greaterThanOrEqual(0);
  expectTypeOf(data.goku.losses).toEqualTypeOf<number>();
  expect(data.goku.WLR).toBeDefined();
  expect(data.goku.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.goku.WLR).toEqualTypeOf<number>();
  expect(data.sanic).toBeDefined();
  expectTypeOf(data.sanic).toEqualTypeOf<SmashHeoresHero>();
  expect(data.sanic.name).toBeDefined();
  expectTypeOf(data.sanic.name).toEqualTypeOf<string>();
  expect(data.sanic.level).toBeDefined();
  expect(data.sanic.level).greaterThanOrEqual(0);
  expectTypeOf(data.sanic.level).toEqualTypeOf<number>();
  expect(data.sanic.xp).toBeDefined();
  expect(data.sanic.xp).greaterThanOrEqual(0);
  expectTypeOf(data.sanic.xp).toEqualTypeOf<number>();
  expect(data.sanic.prestige).toBeDefined();
  expect(data.sanic.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.sanic.prestige).toEqualTypeOf<number>();
  expect(data.sanic.playedGames).toBeDefined();
  expect(data.sanic.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.sanic.playedGames).toEqualTypeOf<number>();
  expect(data.sanic.kills).toBeDefined();
  expect(data.sanic.kills).greaterThanOrEqual(0);
  expectTypeOf(data.sanic.kills).toEqualTypeOf<number>();
  expect(data.sanic.deaths).toBeDefined();
  expect(data.sanic.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.sanic.deaths).toEqualTypeOf<number>();
  expect(data.sanic.KDR).toBeDefined();
  expect(data.sanic.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.sanic.KDR).toEqualTypeOf<number>();
  expect(data.sanic.wins).toBeDefined();
  expect(data.sanic.wins).greaterThanOrEqual(0);
  expectTypeOf(data.sanic.wins).toEqualTypeOf<number>();
  expect(data.sanic.losses).toBeDefined();
  expect(data.sanic.losses).greaterThanOrEqual(0);
  expectTypeOf(data.sanic.losses).toEqualTypeOf<number>();
  expect(data.sanic.WLR).toBeDefined();
  expect(data.sanic.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.sanic.WLR).toEqualTypeOf<number>();
  expect(data.duskCrawler).toBeDefined();
  expectTypeOf(data.duskCrawler).toEqualTypeOf<SmashHeoresHero>();
  expect(data.duskCrawler.name).toBeDefined();
  expectTypeOf(data.duskCrawler.name).toEqualTypeOf<string>();
  expect(data.duskCrawler.level).toBeDefined();
  expect(data.duskCrawler.level).greaterThanOrEqual(0);
  expectTypeOf(data.duskCrawler.level).toEqualTypeOf<number>();
  expect(data.duskCrawler.xp).toBeDefined();
  expect(data.duskCrawler.xp).greaterThanOrEqual(0);
  expectTypeOf(data.duskCrawler.xp).toEqualTypeOf<number>();
  expect(data.duskCrawler.prestige).toBeDefined();
  expect(data.duskCrawler.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.duskCrawler.prestige).toEqualTypeOf<number>();
  expect(data.duskCrawler.playedGames).toBeDefined();
  expect(data.duskCrawler.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.duskCrawler.playedGames).toEqualTypeOf<number>();
  expect(data.duskCrawler.kills).toBeDefined();
  expect(data.duskCrawler.kills).greaterThanOrEqual(0);
  expectTypeOf(data.duskCrawler.kills).toEqualTypeOf<number>();
  expect(data.duskCrawler.deaths).toBeDefined();
  expect(data.duskCrawler.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.duskCrawler.deaths).toEqualTypeOf<number>();
  expect(data.duskCrawler.KDR).toBeDefined();
  expect(data.duskCrawler.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.duskCrawler.KDR).toEqualTypeOf<number>();
  expect(data.duskCrawler.wins).toBeDefined();
  expect(data.duskCrawler.wins).greaterThanOrEqual(0);
  expectTypeOf(data.duskCrawler.wins).toEqualTypeOf<number>();
  expect(data.duskCrawler.losses).toBeDefined();
  expect(data.duskCrawler.losses).greaterThanOrEqual(0);
  expectTypeOf(data.duskCrawler.losses).toEqualTypeOf<number>();
  expect(data.duskCrawler.WLR).toBeDefined();
  expect(data.duskCrawler.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.duskCrawler.WLR).toEqualTypeOf<number>();
  expect(data.shoopDaWhoop).toBeDefined();
  expectTypeOf(data.shoopDaWhoop).toEqualTypeOf<SmashHeoresHero>();
  expect(data.shoopDaWhoop.name).toBeDefined();
  expectTypeOf(data.shoopDaWhoop.name).toEqualTypeOf<string>();
  expect(data.shoopDaWhoop.level).toBeDefined();
  expect(data.shoopDaWhoop.level).greaterThanOrEqual(0);
  expectTypeOf(data.shoopDaWhoop.level).toEqualTypeOf<number>();
  expect(data.shoopDaWhoop.xp).toBeDefined();
  expect(data.shoopDaWhoop.xp).greaterThanOrEqual(0);
  expectTypeOf(data.shoopDaWhoop.xp).toEqualTypeOf<number>();
  expect(data.shoopDaWhoop.prestige).toBeDefined();
  expect(data.shoopDaWhoop.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.shoopDaWhoop.prestige).toEqualTypeOf<number>();
  expect(data.shoopDaWhoop.playedGames).toBeDefined();
  expect(data.shoopDaWhoop.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.shoopDaWhoop.playedGames).toEqualTypeOf<number>();
  expect(data.shoopDaWhoop.kills).toBeDefined();
  expect(data.shoopDaWhoop.kills).greaterThanOrEqual(0);
  expectTypeOf(data.shoopDaWhoop.kills).toEqualTypeOf<number>();
  expect(data.shoopDaWhoop.deaths).toBeDefined();
  expect(data.shoopDaWhoop.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.shoopDaWhoop.deaths).toEqualTypeOf<number>();
  expect(data.shoopDaWhoop.KDR).toBeDefined();
  expect(data.shoopDaWhoop.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.shoopDaWhoop.KDR).toEqualTypeOf<number>();
  expect(data.shoopDaWhoop.wins).toBeDefined();
  expect(data.shoopDaWhoop.wins).greaterThanOrEqual(0);
  expectTypeOf(data.shoopDaWhoop.wins).toEqualTypeOf<number>();
  expect(data.shoopDaWhoop.losses).toBeDefined();
  expect(data.shoopDaWhoop.losses).greaterThanOrEqual(0);
  expectTypeOf(data.shoopDaWhoop.losses).toEqualTypeOf<number>();
  expect(data.shoopDaWhoop.WLR).toBeDefined();
  expect(data.shoopDaWhoop.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.shoopDaWhoop.WLR).toEqualTypeOf<number>();
  expect(data.greenHood).toBeDefined();
  expectTypeOf(data.greenHood).toEqualTypeOf<SmashHeoresHero>();
  expect(data.greenHood.name).toBeDefined();
  expectTypeOf(data.greenHood.name).toEqualTypeOf<string>();
  expect(data.greenHood.level).toBeDefined();
  expect(data.greenHood.level).greaterThanOrEqual(0);
  expectTypeOf(data.greenHood.level).toEqualTypeOf<number>();
  expect(data.greenHood.xp).toBeDefined();
  expect(data.greenHood.xp).greaterThanOrEqual(0);
  expectTypeOf(data.greenHood.xp).toEqualTypeOf<number>();
  expect(data.greenHood.prestige).toBeDefined();
  expect(data.greenHood.prestige).greaterThanOrEqual(0);
  expectTypeOf(data.greenHood.prestige).toEqualTypeOf<number>();
  expect(data.greenHood.playedGames).toBeDefined();
  expect(data.greenHood.playedGames).greaterThanOrEqual(0);
  expectTypeOf(data.greenHood.playedGames).toEqualTypeOf<number>();
  expect(data.greenHood.kills).toBeDefined();
  expect(data.greenHood.kills).greaterThanOrEqual(0);
  expectTypeOf(data.greenHood.kills).toEqualTypeOf<number>();
  expect(data.greenHood.deaths).toBeDefined();
  expect(data.greenHood.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.greenHood.deaths).toEqualTypeOf<number>();
  expect(data.greenHood.KDR).toBeDefined();
  expect(data.greenHood.KDR).greaterThanOrEqual(0);
  expectTypeOf(data.greenHood.KDR).toEqualTypeOf<number>();
  expect(data.greenHood.wins).toBeDefined();
  expect(data.greenHood.wins).greaterThanOrEqual(0);
  expectTypeOf(data.greenHood.wins).toEqualTypeOf<number>();
  expect(data.greenHood.losses).toBeDefined();
  expect(data.greenHood.losses).greaterThanOrEqual(0);
  expectTypeOf(data.greenHood.losses).toEqualTypeOf<number>();
  expect(data.greenHood.WLR).toBeDefined();
  expect(data.greenHood.WLR).greaterThanOrEqual(0);
  expectTypeOf(data.greenHood.WLR).toEqualTypeOf<number>();
});
