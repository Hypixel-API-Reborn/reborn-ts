import Booster from '../structures/Boosters/Booster';
import { expect, expectTypeOf, test } from 'vitest';
import Client from '../Client';
import Game from '../structures/Game';

test('getBoosters (raw)', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getBoosters({ raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getBoosters', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getBoosters();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<Booster[]>();
  data.forEach((booster: Booster) => {
    expect(booster).toBeDefined();
    expect(booster).toBeInstanceOf(Booster);
    expectTypeOf(booster).toEqualTypeOf<Booster>();

    expect(booster.purchaser).toBeDefined();
    expectTypeOf(booster.purchaser).toEqualTypeOf<string>();

    expect(booster.amount).toBeDefined();
    expectTypeOf(booster.amount).toEqualTypeOf<number>();

    expect(booster.originalLength).toBeDefined();
    expectTypeOf(booster.originalLength).toEqualTypeOf<number>();

    expect(booster.remaining).toBeDefined();
    expectTypeOf(booster.remaining).toEqualTypeOf<number>();

    expect(booster.activatedTimestamp).toBeDefined();
    expectTypeOf(booster.activatedTimestamp).toEqualTypeOf<number>();

    expect(booster.activated).toBeDefined();
    expectTypeOf(booster.activated).toEqualTypeOf<Date>();

    expect(booster.game).toBeDefined();
    expectTypeOf(booster.game).toEqualTypeOf<Game | null>();

    expect(booster.isActive).toBeDefined();
    expectTypeOf(booster.isActive).toEqualTypeOf<boolean>();

    expect(booster.type).toBeDefined();
    expectTypeOf(booster.type).toEqualTypeOf<'STACKED' | 'QUEUED' | 'ACTIVE'>();

    expect(booster.stackers).toBeDefined();
    expectTypeOf(booster.stackers).toEqualTypeOf<string[]>();

    expect(booster.expired).toBeDefined();
    expectTypeOf(booster.expired).toEqualTypeOf<boolean>();

    expect(booster.toString()).toBeDefined();
    expectTypeOf(booster.toString()).toEqualTypeOf<string>();
  });

  client.destroy();
});
