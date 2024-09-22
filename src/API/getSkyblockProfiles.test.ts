import Banking from '../structures/SkyBlock/Profile/Banking';
import Client from '../Client';
import CommunityUpgrades from '../structures/SkyBlock/Profile/CommunityUpgrades';
import SkyblockGarden from '../structures/SkyBlock/SkyblockGarden';
import SkyblockMember from '../structures/SkyBlock/Member/Member';
import SkyblockProfile from '../structures/SkyBlock/Profile/Profile';
import { SkyblockProfileName } from '../structures/SkyBlock/Profile/Types';
import { expect, expectTypeOf, test } from 'vitest';

test('getSkyblockProfiles (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockProfiles('14727faefbdc4aff848cd2713eb9939e', { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getSkyblockProfiles (no input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockProfiles()).rejects.toThrowError(client.errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('getSkyblockProfiles (no profiles)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockProfiles('b45add7b081443909fb00aa9a3e15eb0')).rejects.toThrowError(
    client.errors.NO_SKYBLOCK_PROFILES
  );
  client.destroy();
});

test('getSkyblockProfiles', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockProfiles('14727faefbdc4aff848cd2713eb9939e');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockProfile[]>();

  data.forEach((profile: SkyblockProfile) => {
    expect(profile).toBeDefined();
    expectTypeOf(profile).toEqualTypeOf<SkyblockProfile>();

    expect(profile.profileId).toBeDefined();
    expectTypeOf(profile.profileId).toEqualTypeOf<string>();

    expect(profile.profileName).toBeDefined();
    expectTypeOf(profile.profileName).toEqualTypeOf<SkyblockProfileName>();

    expect(profile.gameMode).toBeDefined();
    expectTypeOf(profile.gameMode).toEqualTypeOf<string | null>();

    expect(profile.banking).toBeDefined();
    expectTypeOf(profile.banking).toEqualTypeOf<Banking>();

    expect(profile.garden).toBeDefined();
    expect(profile.garden).toBeNull();
    expectTypeOf(profile.garden).toEqualTypeOf<SkyblockGarden | null>();

    expect(profile.communityUpgrades).toBeDefined();
    expectTypeOf(profile.communityUpgrades).toEqualTypeOf<CommunityUpgrades>();

    expect(profile.selected).toBeDefined();
    expectTypeOf(profile.selected).toEqualTypeOf<boolean>();

    expect(profile.members).toBeDefined();
    expectTypeOf(profile.members).toEqualTypeOf<SkyblockMember[]>();

    expect(profile.me).toBeDefined();
    expectTypeOf(profile.me).toEqualTypeOf<SkyblockMember | undefined>();

    expect(profile.toString()).toBeDefined();
    expectTypeOf(profile.toString()).toEqualTypeOf<string>();
    expect(profile.toString()).toBe(profile.profileId);
  });

  client.destroy();
});

test('getSkyblockProfiles (garden)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockProfiles('add71246c46e455c8345c129ea6f146c', { garden: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockProfile[]>();

  data.forEach((profile: SkyblockProfile) => {
    expect(profile).toBeDefined();
    expectTypeOf(profile).toEqualTypeOf<SkyblockProfile>();

    expect(profile.profileId).toBeDefined();
    expectTypeOf(profile.profileId).toEqualTypeOf<string>();

    expect(profile.profileName).toBeDefined();
    expectTypeOf(profile.profileName).toEqualTypeOf<SkyblockProfileName>();

    expect(profile.gameMode).toBeDefined();
    expectTypeOf(profile.gameMode).toEqualTypeOf<string | null>();

    expect(profile.banking).toBeDefined();
    expectTypeOf(profile.banking).toEqualTypeOf<Banking>();

    expect(profile.garden).toBeDefined();
    expectTypeOf(profile.garden).toEqualTypeOf<SkyblockGarden | null>();

    expect(profile.communityUpgrades).toBeDefined();
    expectTypeOf(profile.communityUpgrades).toEqualTypeOf<CommunityUpgrades>();

    expect(profile.selected).toBeDefined();
    expectTypeOf(profile.selected).toEqualTypeOf<boolean>();

    expect(profile.members).toBeDefined();
    expectTypeOf(profile.members).toEqualTypeOf<SkyblockMember[]>();

    expect(profile.me).toBeDefined();
    expectTypeOf(profile.me).toEqualTypeOf<SkyblockMember | undefined>();

    expect(profile.toString()).toBeDefined();
    expectTypeOf(profile.toString()).toEqualTypeOf<string>();
    expect(profile.toString()).toBe(profile.profileId);
  });

  client.destroy();
});

test('getSkyblockProfiles (museum)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockProfiles('63fe6f4c4b0643b2abd02d15dc303e41', { museum: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockProfile[]>();

  data.forEach((profile: SkyblockProfile) => {
    expect(profile).toBeDefined();
    expectTypeOf(profile).toEqualTypeOf<SkyblockProfile>();

    expect(profile.profileId).toBeDefined();
    expectTypeOf(profile.profileId).toEqualTypeOf<string>();

    expect(profile.profileName).toBeDefined();
    expectTypeOf(profile.profileName).toEqualTypeOf<SkyblockProfileName>();

    expect(profile.gameMode).toBeDefined();
    expectTypeOf(profile.gameMode).toEqualTypeOf<string | null>();

    expect(profile.banking).toBeDefined();
    expectTypeOf(profile.banking).toEqualTypeOf<Banking>();

    expect(profile.garden).toBeDefined();
    expect(profile.garden).toBeNull();
    expectTypeOf(profile.garden).toEqualTypeOf<SkyblockGarden | null>();

    expect(profile.communityUpgrades).toBeDefined();
    expectTypeOf(profile.communityUpgrades).toEqualTypeOf<CommunityUpgrades>();

    expect(profile.selected).toBeDefined();
    expectTypeOf(profile.selected).toEqualTypeOf<boolean>();

    expect(profile.members).toBeDefined();
    expectTypeOf(profile.members).toEqualTypeOf<SkyblockMember[]>();

    expect(profile.me).toBeDefined();
    expectTypeOf(profile.me).toEqualTypeOf<SkyblockMember | undefined>();

    expect(profile.toString()).toBeDefined();
    expectTypeOf(profile.toString()).toEqualTypeOf<string>();
    expect(profile.toString()).toBe(profile.profileId);
  });

  client.destroy();
});
