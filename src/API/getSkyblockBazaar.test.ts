import Client from '../Client';
import Order from '../structures/SkyBlock/Bazzar/Order';
import Product from '../structures/SkyBlock/Bazzar/Product';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyblockBazarr (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockBazaar({ raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});
test('getSkyblockBazarr', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockBazaar();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<Product[]>();
  data.forEach((product: Product) => {
    expect(product).toBeDefined();
    expect(product).toBeInstanceOf(Product);
    expectTypeOf(product).toEqualTypeOf<Product>();
    expect(product.productId).toBeDefined();
    expectTypeOf(product.productId).toEqualTypeOf<string>();
    expect(product.sellSummary).toBeDefined();
    expectTypeOf(product.sellSummary).toEqualTypeOf<Order[]>();
    product.sellSummary.forEach((sell: Order) => {
      expect(sell).toBeDefined();
      expect(sell).toBeInstanceOf(Order);
      expectTypeOf(sell).toEqualTypeOf<Order>();
      expect(sell.amount).toBeDefined();
      expectTypeOf(sell.amount).toEqualTypeOf<number>();
      expect(sell.amount).toBeGreaterThanOrEqual(0);
      expect(sell.pricePerUnit).toBeDefined();
      expectTypeOf(sell.pricePerUnit).toEqualTypeOf<number>();
      expect(sell.pricePerUnit).toBeGreaterThanOrEqual(0);
      expect(sell.totalPrice).toBeDefined();
      expectTypeOf(sell.totalPrice).toEqualTypeOf<number>();
      expect(sell.totalPrice).toBeGreaterThanOrEqual(0);
      expect(sell.orders).toBeDefined();
      expectTypeOf(sell.orders).toEqualTypeOf<number>();
      expect(sell.orders).toBeGreaterThanOrEqual(0);
      expect(sell.toString()).toBeDefined();
      expect(sell.toString()).toEqual(sell.totalPrice);
      expectTypeOf(sell.toString()).toEqualTypeOf<number>();
    });
  });
  client.destroy();
});
