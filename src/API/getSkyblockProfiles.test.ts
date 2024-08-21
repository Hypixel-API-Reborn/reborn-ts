import SkyblockProfile from '../structures/SkyBlock/SkyblockProfile';
import SkyblockMember from '../structures/SkyBlock/SkyblockMember';
import { expect, expectTypeOf, test } from 'vitest';
import Client from '../Client';
import Errors from '../Errors';
const errors = new Errors();

test('getSkyblockProfiles (raw)', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockProfiles('14727faefbdc4aff848cd2713eb9939e', { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getSkyblockProfiles (no input)', () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockProfiles()).rejects.toThrowError(errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('getSkyblockProfiles (no profiles)', () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockProfiles('b45add7b081443909fb00aa9a3e15eb0')).rejects.toThrowError(
    errors.NO_SKYBLOCK_PROFILES
  );
  client.destroy();
});

test('getSkyblockProfiles', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
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
    expectTypeOf(profile.profileName).toEqualTypeOf<string>();

    expect(profile.gameMode).toBeDefined();
    expectTypeOf(profile.gameMode).toEqualTypeOf<string | null>();

    expect(profile.banking).toBeDefined();
    expectTypeOf(profile.banking).toEqualTypeOf<object>();

    expect(profile.communityUpgrades).toBeDefined();
    expectTypeOf(profile.communityUpgrades).toEqualTypeOf<object>();

    expect(profile.selected).toBeDefined();
    expectTypeOf(profile.selected).toEqualTypeOf<boolean>();

    expect(profile.members).toBeDefined();
    expectTypeOf(profile.members).toEqualTypeOf<SkyblockMember[]>();

    expect(profile.me).toBeDefined();
    expectTypeOf(profile.me).toEqualTypeOf<SkyblockMember | undefined>();

    expect(profile.toString()).toBeDefined();
    expectTypeOf(profile.toString()).toEqualTypeOf<string>();
    expect(profile.toString()).toBe(profile.profileName);
  });

  client.destroy();
});

test('getSkyblockProfiles (garden)', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockProfiles('kathund', { garden: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockProfile[]>();

  data.forEach((profile: SkyblockProfile) => {
    expect(profile).toBeDefined();
    expectTypeOf(profile).toEqualTypeOf<SkyblockProfile>();

    expect(profile.profileId).toBeDefined();
    expectTypeOf(profile.profileId).toEqualTypeOf<string>();

    expect(profile.profileName).toBeDefined();
    expectTypeOf(profile.profileName).toEqualTypeOf<string>();

    expect(profile.gameMode).toBeDefined();
    expectTypeOf(profile.gameMode).toEqualTypeOf<string | null>();

    expect(profile.banking).toBeDefined();
    expectTypeOf(profile.banking).toEqualTypeOf<object>();

    expect(profile.communityUpgrades).toBeDefined();
    expectTypeOf(profile.communityUpgrades).toEqualTypeOf<object>();

    expect(profile.selected).toBeDefined();
    expectTypeOf(profile.selected).toEqualTypeOf<boolean>();

    expect(profile.members).toBeDefined();
    expectTypeOf(profile.members).toEqualTypeOf<SkyblockMember[]>();

    expect(profile.me).toBeDefined();
    expectTypeOf(profile.me).toEqualTypeOf<SkyblockMember | undefined>();

    expect(profile.toString()).toBeDefined();
    expectTypeOf(profile.toString()).toEqualTypeOf<string>();
    expect(profile.toString()).toBe(profile.profileName);
  });

  client.destroy();
});

test('getSkyblockProfiles (museum)', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockProfiles('14727faefbdc4aff848cd2713eb9939e', { museum: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockProfile[]>();

  data.forEach((profile: SkyblockProfile) => {
    expect(profile).toBeDefined();
    expectTypeOf(profile).toEqualTypeOf<SkyblockProfile>();

    expect(profile.profileId).toBeDefined();
    expectTypeOf(profile.profileId).toEqualTypeOf<string>();

    expect(profile.profileName).toBeDefined();
    expectTypeOf(profile.profileName).toEqualTypeOf<string>();

    expect(profile.gameMode).toBeDefined();
    expectTypeOf(profile.gameMode).toEqualTypeOf<string | null>();

    expect(profile.banking).toBeDefined();
    expectTypeOf(profile.banking).toEqualTypeOf<object>();

    expect(profile.communityUpgrades).toBeDefined();
    expectTypeOf(profile.communityUpgrades).toEqualTypeOf<object>();

    expect(profile.selected).toBeDefined();
    expectTypeOf(profile.selected).toEqualTypeOf<boolean>();

    expect(profile.members).toBeDefined();
    expectTypeOf(profile.members).toEqualTypeOf<SkyblockMember[]>();

    expect(profile.me).toBeDefined();
    expectTypeOf(profile.me).toEqualTypeOf<SkyblockMember | undefined>();

    expect(profile.toString()).toBeDefined();
    expectTypeOf(profile.toString()).toEqualTypeOf<string>();
    expect(profile.toString()).toBe(profile.profileName);
  });

  client.destroy();
});
