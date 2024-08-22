import SkyblockInventoryItem from '../../structures/SkyBlock/SkyblockInventoryItem';
import SkyblockMuseumItem from '../../structures/SkyBlock/SkyblockMuseumItem';
import SkyblockProfile from '../../structures/SkyBlock/SkyblockProfile';
import SkyblockMuseum from '../../structures/SkyBlock/SkyblockMuseum';
import { expect, expectTypeOf, test } from 'vitest';
import Client from '../../Client';

test('Client#skyblock.Museum (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const profiles = await client.skyblock.getProfiles('Skreewy');
  const profile = profiles.find((profile: SkyblockProfile) => true === profile.selected);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.skyblock.getMuseum('Skreewy', profile.profileId, { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('Client#skyblock.Museum', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const profiles = await client.skyblock.getProfiles('Skreewy');
  const profile = profiles.find((profile: SkyblockProfile) => true === profile.selected);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.skyblock.getMuseum('Skreewy', profile.profileId);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockMuseum>();

  expect(data.getItems()).toBeDefined();
  expectTypeOf(data.getItems).toEqualTypeOf<() => Promise<SkyblockMuseumItem[]>>();
  expectTypeOf(data.getItems()).toEqualTypeOf<Promise<SkyblockMuseumItem[]>>();

  const items = await data.getItems();
  expect(items).toBeDefined();
  expectTypeOf(items).toEqualTypeOf<SkyblockMuseumItem[]>();
  items.forEach((item: SkyblockMuseumItem) => {
    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(SkyblockMuseumItem);
    expectTypeOf(item).toEqualTypeOf<SkyblockMuseumItem>();

    expect(item.name).toBeDefined();
    expectTypeOf(item.name).toEqualTypeOf<string>();

    expect(item.donated).toBeDefined();
    expectTypeOf(item.donated).toEqualTypeOf<number>();

    expect(item.featuredSlot).toBeDefined();
    expectTypeOf(item.featuredSlot).toEqualTypeOf<string | null>();

    expect(item.borrowing).toBeDefined();
    expectTypeOf(item.borrowing).toEqualTypeOf<boolean>();

    expect(item.items).toBeDefined();
    expectTypeOf(item.items).toEqualTypeOf<SkyblockInventoryItem[]>();
  });

  expect(data.getSpecial()).toBeDefined();
  expectTypeOf(data.getSpecial).toEqualTypeOf<() => Promise<SkyblockMuseumItem[]>>();
  expectTypeOf(data.getSpecial()).toEqualTypeOf<Promise<SkyblockMuseumItem[]>>();

  const special = await data.getSpecial();
  expect(special).toBeDefined();
  expectTypeOf(special).toEqualTypeOf<SkyblockMuseumItem[]>();
  special.forEach((item: SkyblockMuseumItem) => {
    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(SkyblockMuseumItem);
    expectTypeOf(item).toEqualTypeOf<SkyblockMuseumItem>();

    expect(item.name).toBeDefined();
    expectTypeOf(item.name).toEqualTypeOf<string>();

    expect(item.donated).toBeDefined();
    expectTypeOf(item.donated).toEqualTypeOf<number>();

    expect(item.featuredSlot).toBeDefined();
    expectTypeOf(item.featuredSlot).toEqualTypeOf<string | null>();

    expect(item.borrowing).toBeDefined();
    expectTypeOf(item.borrowing).toEqualTypeOf<boolean>();

    expect(item.items).toBeDefined();
    expectTypeOf(item.items).toEqualTypeOf<SkyblockInventoryItem[]>();
  });

  client.destroy();
});
