import axios from 'axios';
import { expect, expectTypeOf, test, vi } from 'vitest';
import Client from '../Client';
import FireSale from '../structures/SkyBlock/Static/FireSale';

test('getSkyblockFireSales (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockFireSales({ raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getSkyblockFireSales', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  vi.spyOn(axios, 'get').mockResolvedValue({
    status: 200,
    data: {
      success: true,
      sales: [
        {
          item_id: 'JACOB_IS_A_WALKING_CLOWN_EMOJI',
          start: 17,
          end: 171,
          amount: 69420,
          price: 7
        },
        {
          item_id: 'ZACH_IS_A_RESTARTED_CLOWN_EMOJI',
          start: 17,
          end: 171,
          amount: 69420,
          price: 7
        }
      ]
    }
  });
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
