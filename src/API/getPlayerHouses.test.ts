import Client from '../Client';
import House from '../structures/House';
import { expect, expectTypeOf, test } from 'vitest';

test('getPlayerHouses (No input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getPlayerHouses()).rejects.toThrowError(client.errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('getPlayerHouses (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getPlayerHouses('69e04609da2a4e7dabb83546a971969e', { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getPlayerHouses', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getPlayerHouses('69e04609da2a4e7dabb83546a971969e');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<House[]>();
  data.forEach((house: House) => {
    expect(house).toBeDefined();
    expect(house).toBeInstanceOf(House);
    expectTypeOf(house).toEqualTypeOf<House>();
    expect(house.name).toBeDefined();
    expectTypeOf(house.name).toEqualTypeOf<string>();
    expect(house.uuid).toBeDefined();
    expectTypeOf(house.uuid).toEqualTypeOf<string>();
    expect(house.owner).toBeDefined();
    expectTypeOf(house.owner).toEqualTypeOf<string>();
    expect(house.createdAtTimestamp).toBeDefined();
    expectTypeOf(house.createdAtTimestamp).toEqualTypeOf<number | null>();
    expect(house.createdAt).toBeDefined();
    expectTypeOf(house.createdAt).toEqualTypeOf<Date | null>();
    expect(house.players).toBeDefined();
    expectTypeOf(house.players).toEqualTypeOf<number>();
    expect(house.cookies).toBeDefined();
    expectTypeOf(house.cookies).toEqualTypeOf<number>();
    expect(house.toString()).toBeDefined();
    expectTypeOf(house.toString()).toEqualTypeOf<string>();
    expect(house.toString()).toBe(house.name);
  });
  client.destroy();
});
