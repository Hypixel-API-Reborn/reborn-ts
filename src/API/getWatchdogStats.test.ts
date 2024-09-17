import Client from '../Client';
import WatchdogStats from '../structures/WatchdogStats';
import { expect, expectTypeOf, test } from 'vitest';

test('getWatchdogStats (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getWatchdogStats({ raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getWatchdogStats', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getWatchdogStats();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<WatchdogStats>();
  expect(data).toBeInstanceOf(WatchdogStats);

  expect(data.byWatchdogTotal).toBeDefined();
  expectTypeOf(data.byWatchdogTotal).toEqualTypeOf<number>();
  expect(data.byWatchdogTotal).toBeGreaterThanOrEqual(0);

  expect(data.byWatchdogLastMinute).toBeDefined();
  expectTypeOf(data.byWatchdogLastMinute).toEqualTypeOf<number>();
  expect(data.byWatchdogLastMinute).toBeGreaterThanOrEqual(0);

  expect(data.byWatchdogRollingDay).toBeDefined();
  expectTypeOf(data.byWatchdogRollingDay).toEqualTypeOf<number>();
  expect(data.byWatchdogRollingDay).toBeGreaterThanOrEqual(0);

  expect(data.byStaffTotal).toBeDefined();
  expectTypeOf(data.byStaffTotal).toEqualTypeOf<number>();
  expect(data.byStaffTotal).toBeGreaterThanOrEqual(0);

  expect(data.byStaffRollingDay).toBeDefined();
  expectTypeOf(data.byStaffRollingDay).toEqualTypeOf<number>();
  expect(data.byStaffRollingDay).toBeGreaterThanOrEqual(0);
  client.destroy();
});
