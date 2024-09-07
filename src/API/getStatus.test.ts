import Client from '../Client';
import Game, { GameCode, GameID, GameString } from '../structures/Game';
import Status from '../structures/Status';
import { expect, expectTypeOf, test } from 'vitest';

test('getStatus (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getStatus('4982eac19ae7422891b61a17a74c87a2', { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getStatus', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getStatus('370d6421b761456fadf28c43fe5c4bcf');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Status);
  expectTypeOf(data).toEqualTypeOf<Status>();

  expect(data.online).toBeDefined();
  expectTypeOf(data.online).toEqualTypeOf<boolean>();

  expect(data.game).toBeDefined();
  expectTypeOf(data.game).toEqualTypeOf<Game | null>();
  if (data.game) {
    expect(data.game).toBeDefined();
    expectTypeOf(data.game).toEqualTypeOf<Game>();
    expect(data.game.game).toBeDefined();
    expectTypeOf(data.game.game).toEqualTypeOf<GameID | GameCode>();
    expect(data.game.id).toBeDefined();
    expectTypeOf(data.game.id).toEqualTypeOf<GameID | null>();
    expect(data.game.code).toBeDefined();
    expectTypeOf(data.game.code).toEqualTypeOf<GameCode | null>();
    expect(data.game.name).toBeDefined();
    expectTypeOf(data.game.name).toEqualTypeOf<GameString | null>();
    expect(data.game.found).toBeDefined();
    expectTypeOf(data.game.found).toEqualTypeOf<boolean>();
    expect(data.game.toString()).toBeDefined();
    expect(data.game.toString()).toBe(data.game.name);
    expectTypeOf(data.game.toString()).toEqualTypeOf<GameString | null>();
    expect(Game.IDS).toBeDefined();
    expectTypeOf(Game.IDS).toEqualTypeOf<GameID[]>();
    expect(Game.CODES).toBeDefined();
    expectTypeOf(Game.CODES).toEqualTypeOf<GameCode[]>();
    expect(Game.NAMES).toBeDefined();
    expectTypeOf(Game.NAMES).toEqualTypeOf<GameString[]>();
  }

  expect(data.mode).toBeDefined();
  expectTypeOf(data.mode).toEqualTypeOf<string | null>();

  expect(data.map).toBeDefined();
  expectTypeOf(data.map).toEqualTypeOf<string | null>();

  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<'Online' | 'Offline'>();
  expect(data.toString()).toBe(data.online ? 'Online' : 'Offline');

  client.destroy();
});
