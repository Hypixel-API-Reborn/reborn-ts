import FireSale from '../../structures/SkyBlock/Static/FireSale';
import { expect, expectTypeOf, test } from 'vitest';
import Client from '../../Client';

test('Client#skyblock.FireSales (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.skyblock.getFireSales({ raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('Client#skyblock.FireSales', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.skyblock.getFireSales();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<FireSale[]>();
  data.forEach((firesale: FireSale) => {
    expect(firesale).toBeDefined();
    expect(firesale).toBeInstanceOf(FireSale);
    expectTypeOf(firesale).toEqualTypeOf<FireSale>();
    expect(firesale.itemId).toBeDefined();
    expectTypeOf(firesale.itemId).toEqualTypeOf<string | null>();
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
  });
  client.destroy();
});
