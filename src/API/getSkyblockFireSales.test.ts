import FireSale from '../structures/SkyBlock/Static/FireSale';
import { expect, expectTypeOf, test } from 'vitest';
import Client from '../Client';

test('getSkyblockFireSales (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockFireSales({ raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getSkyblockFireSales', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockFireSales();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<FireSale[]>();
  data.forEach((firesale: FireSale) => {
    expect(firesale).toBeDefined();
    expect(firesale).toBeInstanceOf(FireSale);
    expectTypeOf(firesale).toEqualTypeOf<FireSale>();
    expect(firesale.itemId).toBeDefined();
    expectTypeOf(firesale.itemId).toEqualTypeOf<string>();
    expect(firesale.startTimestamp).toBeDefined();
    expect(firesale.startTimestamp).toBeGreaterThanOrEqual(0);
    expectTypeOf(firesale.startTimestamp).toEqualTypeOf<number>();
    expect(firesale.startAt).toBeDefined();
    expectTypeOf(firesale.startAt).toEqualTypeOf<Date>();
    expect(firesale.endTimestamp).toBeDefined();
    expectTypeOf(firesale.endTimestamp).toEqualTypeOf<number>();
    expect(firesale.endTimestamp).toBeGreaterThanOrEqual(0);
    expect(firesale.endAt).toBeDefined();
    expectTypeOf(firesale.endAt).toEqualTypeOf<Date>();
    expect(firesale.amount).toBeDefined();
    expectTypeOf(firesale.amount).toEqualTypeOf<number>();
    expect(firesale.amount).toBeGreaterThanOrEqual(0);
    expect(firesale.toString()).toBeDefined();
    expectTypeOf(firesale.toString()).toEqualTypeOf<string>();
    expect(firesale.toString()).toBe(firesale.itemId);
  });
  client.destroy();
});
