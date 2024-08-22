import {
  SkyblockMemberChocolateFactoryData,
  SkyblockMemberTrophyFishRank,
  SkyblockMemberJacobData,
  SkyblockMemberDungeons,
  SkyblockMemberSkills,
  SkyblockMemberSlayer,
  SkyblockMemberStats,
  SkyblockSkillLevel,
  SkyblockRarity
} from '../../utils/SkyblockUtils';
import SkyblockMember, { SkyblockMemberArmor, SkyblockMemberEquipment } from '../../structures/SkyBlock/SkyblockMember';
import SkyblockInventoryItem, { SkyblockGemstone } from '../../structures/SkyBlock/SkyblockInventoryItem';
import SkyblockGarden from '../../structures/SkyBlock/SkyblockGarden';
import SkyblockMuseum from '../../structures/SkyBlock/SkyblockMuseum';
import SkyblockPet from '../../structures/SkyBlock/SkyblockPet';
import { NetworthResult } from 'skyhelper-networth';
import { expect, expectTypeOf, test } from 'vitest';
import Client from '../../Client';

test('Client#skyblock.Member (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.skyblock.getMember('14727faefbdc4aff848cd2713eb9939e', { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('Client#skyblock.Member (no input)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.skyblock.getMember()).rejects.toThrowError(client.errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('Client#skyblock.Member (no profiles)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.skyblock.getMember('b45add7b081443909fb00aa9a3e15eb0')).rejects.toThrowError(
    client.errors.NO_SKYBLOCK_PROFILES
  );
  client.destroy();
});

test('Client#skyblock.Member', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.skyblock.getMember('14727faefbdc4aff848cd2713eb9939e');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<SkyblockMember[]>();

  data.forEach(async (member: SkyblockMember) => {
    expect(member).toBeDefined();
    expect(member).toBeInstanceOf(SkyblockMember);
    expectTypeOf(member).toEqualTypeOf<SkyblockMember>();

    expect(member.uuid).toBeDefined();
    expectTypeOf(member.uuid).toEqualTypeOf<string>();

    expect(member.gameMode).toBeDefined();
    expectTypeOf(member.gameMode).toEqualTypeOf<string | null>();

    expect(member.selected).toBeDefined();
    expectTypeOf(member.selected).toEqualTypeOf<boolean>();

    expect(member.garden).toBeDefined();
    expect(member.garden).toBeNull();
    expectTypeOf(member.garden).toEqualTypeOf<SkyblockGarden | null>();

    expect(member.museum).toBeDefined();
    expectTypeOf(member.museum).toEqualTypeOf<SkyblockMuseum | null>();

    expect(member.profileName).toBeDefined();
    expectTypeOf(member.profileName).toEqualTypeOf<string>();

    expect(member.profileId).toBeDefined();
    expectTypeOf(member.profileId).toEqualTypeOf<string>();

    expect(member.firstJoinTimestamp).toBeDefined();
    expectTypeOf(member.firstJoinTimestamp).toEqualTypeOf<number>();

    expect(member.firstJoinAt).toBeDefined();
    expectTypeOf(member.firstJoinAt).toEqualTypeOf<Date>();

    expect(member.experience).toBeDefined();
    expectTypeOf(member.experience).toEqualTypeOf<number>();

    expect(member.level).toBeDefined();
    expectTypeOf(member.level).toEqualTypeOf<number>();

    expect(member.hotm).toBeDefined();
    expectTypeOf(member.hotm).toEqualTypeOf<SkyblockSkillLevel>();

    expect(member.trophyFish).toBeDefined();
    expectTypeOf(member.trophyFish).toEqualTypeOf<SkyblockMemberTrophyFishRank>();

    expect(member.highestMagicalPower).toBeDefined();
    expectTypeOf(member.highestMagicalPower).toEqualTypeOf<number>();

    expect(member.fairySouls).toBeDefined();
    expectTypeOf(member.fairySouls).toEqualTypeOf<number>();

    expect(member.fairyExchanges).toBeDefined();
    expectTypeOf(member.fairyExchanges).toEqualTypeOf<number>();

    expect(member.skills).toBeDefined();
    expectTypeOf(member.skills).toEqualTypeOf<SkyblockMemberSkills>();

    expect(member.bestiary).toBeDefined();
    expectTypeOf(member.bestiary).toEqualTypeOf<number>();

    expect(member.slayer).toBeDefined();
    expectTypeOf(member.slayer).toEqualTypeOf<SkyblockMemberSlayer | null>();

    expect(member.dungeons).toBeDefined();
    expectTypeOf(member.dungeons).toEqualTypeOf<SkyblockMemberDungeons | null>();

    expect(member.collections).toBeDefined();
    expectTypeOf(member.collections).toEqualTypeOf<object>();

    expect(member.purse).toBeDefined();
    expectTypeOf(member.purse).toEqualTypeOf<number>();

    expect(member.stats).toBeDefined();
    expectTypeOf(member.stats).toEqualTypeOf<SkyblockMemberStats | null>();

    expect(member.pets).toBeDefined();
    expectTypeOf(member.pets).toEqualTypeOf<SkyblockPet[]>();
    member.pets.forEach((pet: SkyblockPet) => {
      expect(pet).toBeDefined();
      expect(pet).toBeInstanceOf(SkyblockPet);
      expectTypeOf(pet).toEqualTypeOf<SkyblockPet>();

      expect(pet.uuid).toBeDefined();
      expectTypeOf(pet.uuid).toEqualTypeOf<string>();

      expect(pet.name).toBeDefined();
      expectTypeOf(pet.name).toEqualTypeOf<string>();

      expect(pet.xp).toBeDefined();
      expectTypeOf(pet.xp).toEqualTypeOf<number>();

      expect(pet.active).toBeDefined();
      expectTypeOf(pet.active).toEqualTypeOf<boolean>();

      expect(pet.rarity).toBeDefined();
      expectTypeOf(pet.rarity).toEqualTypeOf<SkyblockRarity>();

      expect(pet.petScore).toBeDefined();
      expectTypeOf(pet.petScore).toEqualTypeOf<number>();

      expect(pet.heldItem).toBeDefined();
      expectTypeOf(pet.heldItem).toEqualTypeOf<string | null>();

      expect(pet.candyUsed).toBeDefined();
      expectTypeOf(pet.candyUsed).toEqualTypeOf<number>();

      expect(pet.skin).toBeDefined();
      expectTypeOf(pet.skin).toEqualTypeOf<string | null>();

      expect(pet.toString()).toBeDefined();
      expect(pet.toString()).toBe(pet.name);
      expectTypeOf(pet.toString()).toEqualTypeOf<string>();
    });

    expect(member.jacob).toBeDefined();
    expectTypeOf(member.jacob).toEqualTypeOf<SkyblockMemberJacobData>();

    expect(member.chocolate).toBeDefined();
    expectTypeOf(member.chocolate).toEqualTypeOf<SkyblockMemberChocolateFactoryData>();

    expect(member.getArmor()).toBeDefined();
    expectTypeOf(member.getArmor).toEqualTypeOf<() => Promise<SkyblockMemberArmor>>();
    expectTypeOf(member.getArmor()).toEqualTypeOf<Promise<SkyblockMemberArmor>>();

    expect(member.getWardrobe()).toBeDefined();
    expectTypeOf(member.getWardrobe).toEqualTypeOf<() => Promise<SkyblockInventoryItem[]>>();
    expectTypeOf(member.getWardrobe()).toEqualTypeOf<Promise<SkyblockInventoryItem[]>>();

    expect(member.getEnderChest()).toBeDefined();
    expectTypeOf(member.getEnderChest).toEqualTypeOf<() => Promise<SkyblockInventoryItem[]>>();
    expectTypeOf(member.getEnderChest()).toEqualTypeOf<Promise<SkyblockInventoryItem[]>>();

    expect(member.getInventory()).toBeDefined();
    expectTypeOf(member.getInventory).toEqualTypeOf<() => Promise<SkyblockInventoryItem[]>>();
    expectTypeOf(member.getInventory()).toEqualTypeOf<Promise<SkyblockInventoryItem[]>>();

    const inv = await member.getInventory();
    inv.forEach((item: SkyblockInventoryItem) => {
      expect(item.itemId).toBeDefined();
      expectTypeOf(item.itemId).toEqualTypeOf<number>();

      expect(item.count).toBeDefined();
      expectTypeOf(item.count).toEqualTypeOf<number>();

      expect(item.name).toBeDefined();
      expectTypeOf(item.name).toEqualTypeOf<string>();

      expect(item.lore).toBeDefined();
      expectTypeOf(item.lore).toEqualTypeOf<string>();

      expect(item.loreArray).toBeDefined();
      expectTypeOf(item.loreArray).toEqualTypeOf<string[]>();

      expect(item.loreForEmbed).toBeDefined();
      expectTypeOf(item.loreForEmbed).toEqualTypeOf<string>();

      expect(item.color).toBeDefined();
      expectTypeOf(item.color).toEqualTypeOf<string | null>();

      expect(item.enchantments).toBeDefined();
      expectTypeOf(item.enchantments).toEqualTypeOf<Record<string, number>>();

      expect(item.reforge).toBeDefined();
      expectTypeOf(item.reforge).toEqualTypeOf<string>();

      expect(item.gemstones).toBeDefined();
      expectTypeOf(item.gemstones).toEqualTypeOf<SkyblockGemstone[] | []>();

      expect(item.damage).toBeDefined();
      expectTypeOf(item.damage).toEqualTypeOf<number>();

      expect(item.rarity).toBeDefined();
      expectTypeOf(item.rarity).toEqualTypeOf<string>();

      expect(item.dungeonStars).toBeDefined();
      expectTypeOf(item.dungeonStars).toEqualTypeOf<number>();

      expect(item.gearScore).toBeDefined();
      expectTypeOf(item.gearScore).toEqualTypeOf<number>();

      expect(item.uuid).toBeDefined();
      expectTypeOf(item.uuid).toEqualTypeOf<string>();

      expect(item.soulbound).toBeDefined();
      expectTypeOf(item.soulbound).toEqualTypeOf<boolean>();

      expect(item.artOfWar).toBeDefined();
      expectTypeOf(item.artOfWar).toEqualTypeOf<number>();

      expect(item.rune).toBeDefined();
      expectTypeOf(item.rune).toEqualTypeOf<object>();

      expect(item.hotPotatoBooks).toBeDefined();
      expectTypeOf(item.hotPotatoBooks).toEqualTypeOf<number>();

      expect(item.recombobulated).toBeDefined();
      expectTypeOf(item.recombobulated).toEqualTypeOf<boolean>();

      expect(item.attributes).toBeDefined();
      expectTypeOf(item.attributes).toEqualTypeOf<object>();

      expect(item.hecatomb).toBeDefined();
      expectTypeOf(item.hecatomb).toEqualTypeOf<number>();

      expect(item.champion).toBeDefined();
      expectTypeOf(item.champion).toEqualTypeOf<number>();

      expect(item.cultivating).toBeDefined();
      expectTypeOf(item.cultivating).toEqualTypeOf<number>();

      expect(item.expertise).toBeDefined();
      expectTypeOf(item.expertise).toEqualTypeOf<number>();

      expect(item.compact).toBeDefined();
      expectTypeOf(item.compact).toEqualTypeOf<number>();

      expect(item.blocksWalked).toBeDefined();
      expectTypeOf(item.blocksWalked).toEqualTypeOf<number>();

      expect(item.toString()).toBeDefined();
      expect(item.toString()).toBe(item.name);
      expectTypeOf(item.toString()).toEqualTypeOf<string>();
    });

    expect(member.getPetScore()).toBeDefined();
    expectTypeOf(member.getPetScore).toEqualTypeOf<() => number>();
    expectTypeOf(member.getPetScore()).toEqualTypeOf<number>();

    expect(member.getEquipment()).toBeDefined();
    expectTypeOf(member.getEquipment).toEqualTypeOf<() => Promise<SkyblockMemberEquipment>>();
    expectTypeOf(member.getEquipment()).toEqualTypeOf<Promise<SkyblockMemberEquipment>>();

    expect(member.getPersonalVault()).toBeDefined();
    expectTypeOf(member.getPersonalVault).toEqualTypeOf<() => Promise<SkyblockInventoryItem[]>>();
    expectTypeOf(member.getPersonalVault()).toEqualTypeOf<Promise<SkyblockInventoryItem[]>>();

    expect(member.getNetworth()).toBeDefined();
    expectTypeOf(member.getNetworth).toEqualTypeOf<() => Promise<NetworthResult | null>>();
    expectTypeOf(member.getNetworth()).toEqualTypeOf<Promise<NetworthResult | null>>();

    expect(member.toString()).toBeDefined();
    expect(member.toString()).toBe(member.uuid);
    expectTypeOf(member.toString()).toEqualTypeOf<string>();
  });

  client.destroy();
});
