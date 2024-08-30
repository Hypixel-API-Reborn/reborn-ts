import { expect, expectTypeOf, test } from 'vitest';
import Order from './Order';

test('Order', () => {
  const data = new Order({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Order);
  expectTypeOf(data).toEqualTypeOf<Order>();
  expect(data.amount).toBeDefined();
  expect(data.amount).greaterThanOrEqual(0);
  expectTypeOf(data.amount).toEqualTypeOf<number>();
  expect(data.pricePerUnit).toBeDefined();
  expect(data.pricePerUnit).greaterThanOrEqual(0);
  expectTypeOf(data.pricePerUnit).toEqualTypeOf<number>();
  expect(data.totalPrice).toBeDefined();
  expect(data.totalPrice).greaterThanOrEqual(0);
  expectTypeOf(data.totalPrice).toEqualTypeOf<number>();
  expect(data.orders).toBeDefined();
  expect(data.orders).greaterThanOrEqual(0);
  expectTypeOf(data.orders).toEqualTypeOf<number>();
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
  expect(data.toString()).toBe(data.totalPrice);
});
