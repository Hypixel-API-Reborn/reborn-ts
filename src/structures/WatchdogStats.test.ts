import WatchdogStats from './WatchdogStats';
import { expect, expectTypeOf, test } from 'vitest';

test('WatchdogStats', () => {
  const data = new WatchdogStats({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(WatchdogStats);
  expectTypeOf(data).toEqualTypeOf<WatchdogStats>();
  expect(data.byWatchdogTotal).toBeDefined();
  expect(data.byWatchdogTotal).greaterThanOrEqual(0);
  expectTypeOf(data.byWatchdogTotal).toEqualTypeOf<number>();
  expect(data.byWatchdogLastMinute).toBeDefined();
  expect(data.byWatchdogLastMinute).greaterThanOrEqual(0);
  expectTypeOf(data.byWatchdogLastMinute).toEqualTypeOf<number>();
  expect(data.byWatchdogRollingDay).toBeDefined();
  expect(data.byWatchdogRollingDay).greaterThanOrEqual(0);
  expectTypeOf(data.byWatchdogRollingDay).toEqualTypeOf<number>();
  expect(data.byStaffTotal).toBeDefined();
  expect(data.byStaffTotal).greaterThanOrEqual(0);
  expectTypeOf(data.byStaffTotal).toEqualTypeOf<number>();
  expect(data.byStaffRollingDay).toBeDefined();
  expect(data.byStaffRollingDay).greaterThanOrEqual(0);
  expectTypeOf(data.byStaffRollingDay).toEqualTypeOf<number>();
});
