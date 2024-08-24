import Game, { GameCode, GameID, GameString } from '../structures/Game';
import GuildMember from '../structures/Guild/GuildMember';
import GuildRank from '../structures/Guild/GuildRank';
import { expect, expectTypeOf, test } from 'vitest';
import Guild from '../structures/Guild/Guild';
import { ExpHistory } from '../utils/Guild';
import Color from '../structures/Color';
import Client from '../Client';

test('Invalid Guild Type', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getGuild('invalid', 'invalid')).rejects.toThrowError(
    client.errors.INVALID_GUILD_SEARCH_PARAMETER
  );
  client.destroy();
});

test('Invalid Guild', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getGuild('name', 'this guild dose not exist')).rejects.toThrowError(
    client.errors.GUILD_DOES_NOT_EXIST
  );
  client.destroy();
});

test('Invalid Guild ID', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getGuild('id', 'invalid guild id')).rejects.toThrowError(client.errors.INVALID_GUILD_ID);
  client.destroy();
});

test('No Guild Query', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getGuild('id')).rejects.toThrowError(client.errors.NO_GUILD_QUERY);
  client.destroy();
});

test('User not in a guild', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getGuild('player', '37501e7512b845ab8796e2baf9e9677a');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<null>();
  client.destroy();
});

test('getGuild (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getGuild('name', 'Pixelic', { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getGuild (Name)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getGuild('name', 'Pixelic');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Guild);
  expectTypeOf(data).toEqualTypeOf<Guild>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<string>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.description).toBeDefined();
  expectTypeOf(data.description).toEqualTypeOf<string>();
  expect(data.experience).toBeDefined();
  expectTypeOf(data.experience).toEqualTypeOf<number>();
  expect(data.experience).toBeGreaterThanOrEqual(0);
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.members).toBeDefined();
  expectTypeOf(data.members).toEqualTypeOf<GuildMember[]>();
  data.members.forEach((member: GuildMember) => {
    expect(member).toBeDefined();
    expectTypeOf(member).toEqualTypeOf<GuildMember>();
    expect(member.uuid).toBeDefined();
    expectTypeOf(member.uuid).toEqualTypeOf<string>();
    expect(member.joinedAtTimestamp).toBeDefined();
    expectTypeOf(member.joinedAtTimestamp).toEqualTypeOf<number>();
    expect(member.joinedAt).toBeDefined();
    expectTypeOf(member.joinedAt).toEqualTypeOf<Date>();
    expect(member.questParticipation).toBeDefined();
    expectTypeOf(member.questParticipation).toEqualTypeOf<number>();
    expect(member.rank).toBeDefined();
    expectTypeOf(member.rank).toEqualTypeOf<string>();
    expect(member.mutedUntilTimestamp).toBeDefined();
    expectTypeOf(member.mutedUntilTimestamp).toEqualTypeOf<number | null>();
    expect(member.mutedUntil).toBeDefined();
    expectTypeOf(member.mutedUntil).toEqualTypeOf<Date | null>();
    expect(member.expHistory).toBeDefined();
    expectTypeOf(member.expHistory).toEqualTypeOf<ExpHistory[]>();
    expect(member.weeklyExperience).toBeDefined();
    expectTypeOf(member.weeklyExperience).toEqualTypeOf<number>();
    expect(member.weeklyExperience).toBeGreaterThanOrEqual(0);
    expect(member.toString()).toBeDefined();
    expectTypeOf(member.toString()).toEqualTypeOf<string>();
    expect(member.toString()).toEqual(member.uuid);
  });
  expect(data.me).toBeDefined();
  expectTypeOf(data.me).toEqualTypeOf<GuildMember | null>();
  if (null !== data.me) {
    expect(data.me).toBeDefined();
    expectTypeOf(data.me).toEqualTypeOf<GuildMember>();
    expect(data.me.uuid).toBeDefined();
    expectTypeOf(data.me.uuid).toEqualTypeOf<string>();
    expect(data.me.joinedAtTimestamp).toBeDefined();
    expectTypeOf(data.me.joinedAtTimestamp).toEqualTypeOf<number>();
    expect(data.me.joinedAt).toBeDefined();
    expectTypeOf(data.me.joinedAt).toEqualTypeOf<Date>();
    expect(data.me.questParticipation).toBeDefined();
    expectTypeOf(data.me.questParticipation).toEqualTypeOf<number>();
    expect(data.me.rank).toBeDefined();
    expectTypeOf(data.me.rank).toEqualTypeOf<string>();
    expect(data.me.mutedUntilTimestamp).toBeDefined();
    expectTypeOf(data.me.mutedUntilTimestamp).toEqualTypeOf<number | null>();
    expect(data.me.mutedUntil).toBeDefined();
    expectTypeOf(data.me.mutedUntil).toEqualTypeOf<Date | null>();
    expect(data.me.expHistory).toBeDefined();
    expectTypeOf(data.me.expHistory).toEqualTypeOf<ExpHistory[]>();
    expect(data.me.weeklyExperience).toBeDefined();
    expectTypeOf(data.me.weeklyExperience).toEqualTypeOf<number>();
    expect(data.me.weeklyExperience).toBeGreaterThanOrEqual(0);
    expect(data.me.toString()).toBeDefined();
    expectTypeOf(data.me.toString()).toEqualTypeOf<string>();
    expect(data.me.toString()).toEqual(data.me.uuid);
  }
  expect(data.ranks).toBeDefined();
  expectTypeOf(data.ranks).toEqualTypeOf<GuildRank[]>();
  data.ranks.forEach((rank: GuildRank) => {
    expect(rank).toBeDefined();
    expect(rank).toBeInstanceOf(GuildRank);
    expectTypeOf(rank).toEqualTypeOf<GuildRank>();
    expect(rank.name).toBeDefined();
    expectTypeOf(rank.name).toEqualTypeOf<string>();
    expect(rank.default).toBeDefined();
    expectTypeOf(rank.default).toEqualTypeOf<boolean>();
    expect(rank.tag).toBeDefined();
    expectTypeOf(rank.tag).toEqualTypeOf<string | null>();
    expect(rank.createdAtTimestamp).toBeDefined();
    expectTypeOf(rank.createdAtTimestamp).toEqualTypeOf<number>();
    expect(rank.createdAt).toBeDefined();
    expectTypeOf(rank.createdAt).toEqualTypeOf<Date>();
    expect(rank.priority).toBeDefined();
    expectTypeOf(rank.priority).toEqualTypeOf<number>();
    expect(rank.toString()).toBeDefined();
    expectTypeOf(rank.toString()).toEqualTypeOf<string>();
    expect(rank.toString()).toEqual(rank.name);
  });
  expect(data.totalWeeklyGexp).toBeDefined();
  expectTypeOf(data.totalWeeklyGexp).toEqualTypeOf<number>();
  expect(data.createdAtTimestamp).toBeDefined();
  expectTypeOf(data.createdAtTimestamp).toEqualTypeOf<string>();
  expect(data.createdAt).toBeDefined();
  expectTypeOf(data.createdAt).toEqualTypeOf<Date>();
  expect(data.joinable).toBeDefined();
  expectTypeOf(data.joinable).toEqualTypeOf<boolean>();
  expect(data.publiclyListed).toBeDefined();
  expectTypeOf(data.publiclyListed).toEqualTypeOf<boolean>();
  expect(data.chatMuteUntilTimestamp).toBeDefined();
  expectTypeOf(data.chatMuteUntilTimestamp).toEqualTypeOf<number | null>();
  expect(data.chatMuteUntil).toBeDefined();
  expectTypeOf(data.chatMuteUntil).toEqualTypeOf<Date | null>();
  expect(data.banner).toBeDefined();
  expectTypeOf(data.banner).toEqualTypeOf<{ Pattern: string; Color: string }[]>();
  expect(data.tag).toBeDefined();
  expectTypeOf(data.tag).toEqualTypeOf<string>();
  expect(data.tagColor).toBeDefined();
  expectTypeOf(data.tagColor).toEqualTypeOf<Color | null>();
  expect(data.expHistory).toBeDefined();
  expectTypeOf(data.expHistory).toEqualTypeOf<ExpHistory[]>();
  expect(data.achievements).toBeDefined();
  expectTypeOf(data.achievements).toEqualTypeOf<{ winners: number; experienceKings: number; onlinePlayers: number }>();
  expect(data.achievements.winners).toBeDefined();
  expectTypeOf(data.achievements.winners).toEqualTypeOf<number>();
  expect(data.achievements.winners).toBeGreaterThanOrEqual(0);
  expect(data.achievements.experienceKings).toBeDefined();
  expectTypeOf(data.achievements.experienceKings).toEqualTypeOf<number>();
  expect(data.achievements.experienceKings).toBeGreaterThanOrEqual(0);
  expect(data.preferredGames).toBeDefined();
  expectTypeOf(data.preferredGames).toEqualTypeOf<Game[]>();
  data.preferredGames.forEach((game: Game) => {
    expect(game).toBeDefined();
    expectTypeOf(game).toEqualTypeOf<Game>();
    expect(game.game).toBeDefined();
    expectTypeOf(game.game).toEqualTypeOf<GameID | GameCode>();
    expect(game.id).toBeDefined();
    expectTypeOf(game.id).toEqualTypeOf<GameID | null>();
    expect(game.code).toBeDefined();
    expectTypeOf(game.code).toEqualTypeOf<GameCode | null>();
    expect(game.name).toBeDefined();
    expectTypeOf(game.name).toEqualTypeOf<GameString | null>();
    expect(game.found).toBeDefined();
    expectTypeOf(game.found).toEqualTypeOf<boolean>();
    expect(game.toString()).toBeDefined();
    expect(game.toString()).toBe(game.name);
    expectTypeOf(game.toString()).toEqualTypeOf<GameString | null>();
    expect(Game.IDS).toBeDefined();
    expectTypeOf(Game.IDS).toEqualTypeOf<GameID[]>();
    expect(Game.CODES).toBeDefined();
    expectTypeOf(Game.CODES).toEqualTypeOf<GameCode[]>();
    expect(Game.NAMES).toBeDefined();
    expectTypeOf(Game.NAMES).toEqualTypeOf<GameString[]>();
  });
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
  expect(data.guildMaster()).toBeDefined();
  expect(data.guildMaster()).toBeInstanceOf(GuildMember);
  expect(['Guild Master', 'GUILDMASTER']).toContain(data.guildMaster().rank);
  expectTypeOf(data.guildMaster()).toEqualTypeOf<GuildMember>();
  client.destroy();
});

test('getGuild (Id)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getGuild('id', '64b54f9d8ea8c96aaedafe84');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Guild);
  expectTypeOf(data).toEqualTypeOf<Guild>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<string>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.description).toBeDefined();
  expectTypeOf(data.description).toEqualTypeOf<string>();
  expect(data.experience).toBeDefined();
  expectTypeOf(data.experience).toEqualTypeOf<number>();
  expect(data.experience).toBeGreaterThanOrEqual(0);
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.members).toBeDefined();
  expectTypeOf(data.members).toEqualTypeOf<GuildMember[]>();
  data.members.forEach((member: GuildMember) => {
    expect(member).toBeDefined();
    expectTypeOf(member).toEqualTypeOf<GuildMember>();
    expect(member.uuid).toBeDefined();
    expectTypeOf(member.uuid).toEqualTypeOf<string>();
    expect(member.joinedAtTimestamp).toBeDefined();
    expectTypeOf(member.joinedAtTimestamp).toEqualTypeOf<number>();
    expect(member.joinedAt).toBeDefined();
    expectTypeOf(member.joinedAt).toEqualTypeOf<Date>();
    expect(member.questParticipation).toBeDefined();
    expectTypeOf(member.questParticipation).toEqualTypeOf<number>();
    expect(member.rank).toBeDefined();
    expectTypeOf(member.rank).toEqualTypeOf<string>();
    expect(member.mutedUntilTimestamp).toBeDefined();
    expectTypeOf(member.mutedUntilTimestamp).toEqualTypeOf<number | null>();
    expect(member.mutedUntil).toBeDefined();
    expectTypeOf(member.mutedUntil).toEqualTypeOf<Date | null>();
    expect(member.expHistory).toBeDefined();
    expectTypeOf(member.expHistory).toEqualTypeOf<ExpHistory[]>();
    expect(member.weeklyExperience).toBeDefined();
    expectTypeOf(member.weeklyExperience).toEqualTypeOf<number>();
    expect(member.weeklyExperience).toBeGreaterThanOrEqual(0);
    expect(member.toString()).toBeDefined();
    expectTypeOf(member.toString()).toEqualTypeOf<string>();
    expect(member.toString()).toEqual(member.uuid);
  });
  expect(data.me).toBeDefined();
  expectTypeOf(data.me).toEqualTypeOf<GuildMember | null>();
  if (null !== data.me) {
    expect(data.me).toBeDefined();
    expectTypeOf(data.me).toEqualTypeOf<GuildMember>();
    expect(data.me.uuid).toBeDefined();
    expectTypeOf(data.me.uuid).toEqualTypeOf<string>();
    expect(data.me.joinedAtTimestamp).toBeDefined();
    expectTypeOf(data.me.joinedAtTimestamp).toEqualTypeOf<number>();
    expect(data.me.joinedAt).toBeDefined();
    expectTypeOf(data.me.joinedAt).toEqualTypeOf<Date>();
    expect(data.me.questParticipation).toBeDefined();
    expectTypeOf(data.me.questParticipation).toEqualTypeOf<number>();
    expect(data.me.rank).toBeDefined();
    expectTypeOf(data.me.rank).toEqualTypeOf<string>();
    expect(data.me.mutedUntilTimestamp).toBeDefined();
    expectTypeOf(data.me.mutedUntilTimestamp).toEqualTypeOf<number | null>();
    expect(data.me.mutedUntil).toBeDefined();
    expectTypeOf(data.me.mutedUntil).toEqualTypeOf<Date | null>();
    expect(data.me.expHistory).toBeDefined();
    expectTypeOf(data.me.expHistory).toEqualTypeOf<ExpHistory[]>();
    expect(data.me.weeklyExperience).toBeDefined();
    expectTypeOf(data.me.weeklyExperience).toEqualTypeOf<number>();
    expect(data.me.weeklyExperience).toBeGreaterThanOrEqual(0);
    expect(data.me.toString()).toBeDefined();
    expectTypeOf(data.me.toString()).toEqualTypeOf<string>();
    expect(data.me.toString()).toEqual(data.me.uuid);
  }
  expect(data.ranks).toBeDefined();
  expectTypeOf(data.ranks).toEqualTypeOf<GuildRank[]>();
  data.ranks.forEach((rank: GuildRank) => {
    expect(rank).toBeDefined();
    expect(rank).toBeInstanceOf(GuildRank);
    expectTypeOf(rank).toEqualTypeOf<GuildRank>();
    expect(rank.name).toBeDefined();
    expectTypeOf(rank.name).toEqualTypeOf<string>();
    expect(rank.default).toBeDefined();
    expectTypeOf(rank.default).toEqualTypeOf<boolean>();
    expect(rank.tag).toBeDefined();
    expectTypeOf(rank.tag).toEqualTypeOf<string | null>();
    expect(rank.createdAtTimestamp).toBeDefined();
    expectTypeOf(rank.createdAtTimestamp).toEqualTypeOf<number>();
    expect(rank.createdAt).toBeDefined();
    expectTypeOf(rank.createdAt).toEqualTypeOf<Date>();
    expect(rank.priority).toBeDefined();
    expectTypeOf(rank.priority).toEqualTypeOf<number>();
    expect(rank.toString()).toBeDefined();
    expectTypeOf(rank.toString()).toEqualTypeOf<string>();
    expect(rank.toString()).toEqual(rank.name);
  });
  expect(data.totalWeeklyGexp).toBeDefined();
  expectTypeOf(data.totalWeeklyGexp).toEqualTypeOf<number>();
  expect(data.createdAtTimestamp).toBeDefined();
  expectTypeOf(data.createdAtTimestamp).toEqualTypeOf<string>();
  expect(data.createdAt).toBeDefined();
  expectTypeOf(data.createdAt).toEqualTypeOf<Date>();
  expect(data.joinable).toBeDefined();
  expectTypeOf(data.joinable).toEqualTypeOf<boolean>();
  expect(data.publiclyListed).toBeDefined();
  expectTypeOf(data.publiclyListed).toEqualTypeOf<boolean>();
  expect(data.chatMuteUntilTimestamp).toBeDefined();
  expectTypeOf(data.chatMuteUntilTimestamp).toEqualTypeOf<number | null>();
  expect(data.chatMuteUntil).toBeDefined();
  expectTypeOf(data.chatMuteUntil).toEqualTypeOf<Date | null>();
  expect(data.banner).toBeDefined();
  expectTypeOf(data.banner).toEqualTypeOf<{ Pattern: string; Color: string }[]>();
  expect(data.tag).toBeDefined();
  expectTypeOf(data.tag).toEqualTypeOf<string>();
  expect(data.tagColor).toBeDefined();
  expectTypeOf(data.tagColor).toEqualTypeOf<Color | null>();
  expect(data.expHistory).toBeDefined();
  expectTypeOf(data.expHistory).toEqualTypeOf<ExpHistory[]>();
  expect(data.achievements).toBeDefined();
  expectTypeOf(data.achievements).toEqualTypeOf<{ winners: number; experienceKings: number; onlinePlayers: number }>();
  expect(data.achievements.winners).toBeDefined();
  expectTypeOf(data.achievements.winners).toEqualTypeOf<number>();
  expect(data.achievements.winners).toBeGreaterThanOrEqual(0);
  expect(data.achievements.experienceKings).toBeDefined();
  expectTypeOf(data.achievements.experienceKings).toEqualTypeOf<number>();
  expect(data.achievements.experienceKings).toBeGreaterThanOrEqual(0);
  expect(data.preferredGames).toBeDefined();
  expectTypeOf(data.preferredGames).toEqualTypeOf<Game[]>();
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
  expect(data.guildMaster()).toBeDefined();
  expect(data.guildMaster()).toBeInstanceOf(GuildMember);
  expect(['Guild Master', 'GUILDMASTER']).toContain(data.guildMaster().rank);
  expectTypeOf(data.guildMaster()).toEqualTypeOf<GuildMember>();
  client.destroy();
});

test('getGuild (Player)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getGuild('player', '14727faefbdc4aff848cd2713eb9939e');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Guild);
  expectTypeOf(data).toEqualTypeOf<Guild>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<string>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.description).toBeDefined();
  expectTypeOf(data.description).toEqualTypeOf<string>();
  expect(data.experience).toBeDefined();
  expectTypeOf(data.experience).toEqualTypeOf<number>();
  expect(data.experience).toBeGreaterThanOrEqual(0);
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.members).toBeDefined();
  expectTypeOf(data.members).toEqualTypeOf<GuildMember[]>();
  data.members.forEach((member: GuildMember) => {
    expect(member).toBeDefined();
    expectTypeOf(member).toEqualTypeOf<GuildMember>();
    expect(member.uuid).toBeDefined();
    expectTypeOf(member.uuid).toEqualTypeOf<string>();
    expect(member.joinedAtTimestamp).toBeDefined();
    expectTypeOf(member.joinedAtTimestamp).toEqualTypeOf<number>();
    expect(member.joinedAt).toBeDefined();
    expectTypeOf(member.joinedAt).toEqualTypeOf<Date>();
    expect(member.questParticipation).toBeDefined();
    expectTypeOf(member.questParticipation).toEqualTypeOf<number>();
    expect(member.rank).toBeDefined();
    expectTypeOf(member.rank).toEqualTypeOf<string>();
    expect(member.mutedUntilTimestamp).toBeDefined();
    expectTypeOf(member.mutedUntilTimestamp).toEqualTypeOf<number | null>();
    expect(member.mutedUntil).toBeDefined();
    expectTypeOf(member.mutedUntil).toEqualTypeOf<Date | null>();
    expect(member.expHistory).toBeDefined();
    expectTypeOf(member.expHistory).toEqualTypeOf<ExpHistory[]>();
    expect(member.weeklyExperience).toBeDefined();
    expectTypeOf(member.weeklyExperience).toEqualTypeOf<number>();
    expect(member.weeklyExperience).toBeGreaterThanOrEqual(0);
    expect(member.toString()).toBeDefined();
    expectTypeOf(member.toString()).toEqualTypeOf<string>();
    expect(member.toString()).toEqual(member.uuid);
  });
  expect(data.me).toBeDefined();
  expectTypeOf(data.me).toEqualTypeOf<GuildMember | null>();
  if (null !== data.me) {
    expect(data.me).toBeDefined();
    expectTypeOf(data.me).toEqualTypeOf<GuildMember>();
    expect(data.me.uuid).toBeDefined();
    expectTypeOf(data.me.uuid).toEqualTypeOf<string>();
    expect(data.me.joinedAtTimestamp).toBeDefined();
    expectTypeOf(data.me.joinedAtTimestamp).toEqualTypeOf<number>();
    expect(data.me.joinedAt).toBeDefined();
    expectTypeOf(data.me.joinedAt).toEqualTypeOf<Date>();
    expect(data.me.questParticipation).toBeDefined();
    expectTypeOf(data.me.questParticipation).toEqualTypeOf<number>();
    expect(data.me.rank).toBeDefined();
    expectTypeOf(data.me.rank).toEqualTypeOf<string>();
    expect(data.me.mutedUntilTimestamp).toBeDefined();
    expectTypeOf(data.me.mutedUntilTimestamp).toEqualTypeOf<number | null>();
    expect(data.me.mutedUntil).toBeDefined();
    expectTypeOf(data.me.mutedUntil).toEqualTypeOf<Date | null>();
    expect(data.me.expHistory).toBeDefined();
    expectTypeOf(data.me.expHistory).toEqualTypeOf<ExpHistory[]>();
    expect(data.me.weeklyExperience).toBeDefined();
    expectTypeOf(data.me.weeklyExperience).toEqualTypeOf<number>();
    expect(data.me.weeklyExperience).toBeGreaterThanOrEqual(0);
    expect(data.me.toString()).toBeDefined();
    expectTypeOf(data.me.toString()).toEqualTypeOf<string>();
    expect(data.me.toString()).toEqual(data.me.uuid);
  }
  expect(data.ranks).toBeDefined();
  expectTypeOf(data.ranks).toEqualTypeOf<GuildRank[]>();
  data.ranks.forEach((rank: GuildRank) => {
    expect(rank).toBeDefined();
    expect(rank).toBeInstanceOf(GuildRank);
    expectTypeOf(rank).toEqualTypeOf<GuildRank>();
    expect(rank.name).toBeDefined();
    expectTypeOf(rank.name).toEqualTypeOf<string>();
    expect(rank.default).toBeDefined();
    expectTypeOf(rank.default).toEqualTypeOf<boolean>();
    expect(rank.tag).toBeDefined();
    expectTypeOf(rank.tag).toEqualTypeOf<string | null>();
    expect(rank.createdAtTimestamp).toBeDefined();
    expectTypeOf(rank.createdAtTimestamp).toEqualTypeOf<number>();
    expect(rank.createdAt).toBeDefined();
    expectTypeOf(rank.createdAt).toEqualTypeOf<Date>();
    expect(rank.priority).toBeDefined();
    expectTypeOf(rank.priority).toEqualTypeOf<number>();
    expect(rank.toString()).toBeDefined();
    expectTypeOf(rank.toString()).toEqualTypeOf<string>();
    expect(rank.toString()).toEqual(rank.name);
  });
  expect(data.totalWeeklyGexp).toBeDefined();
  expectTypeOf(data.totalWeeklyGexp).toEqualTypeOf<number>();
  expect(data.createdAtTimestamp).toBeDefined();
  expectTypeOf(data.createdAtTimestamp).toEqualTypeOf<string>();
  expect(data.createdAt).toBeDefined();
  expectTypeOf(data.createdAt).toEqualTypeOf<Date>();
  expect(data.joinable).toBeDefined();
  expectTypeOf(data.joinable).toEqualTypeOf<boolean>();
  expect(data.publiclyListed).toBeDefined();
  expectTypeOf(data.publiclyListed).toEqualTypeOf<boolean>();
  expect(data.chatMuteUntilTimestamp).toBeDefined();
  expectTypeOf(data.chatMuteUntilTimestamp).toEqualTypeOf<number | null>();
  expect(data.chatMuteUntil).toBeDefined();
  expectTypeOf(data.chatMuteUntil).toEqualTypeOf<Date | null>();
  expect(data.banner).toBeDefined();
  expectTypeOf(data.banner).toEqualTypeOf<{ Pattern: string; Color: string }[]>();
  expect(data.tag).toBeDefined();
  expectTypeOf(data.tag).toEqualTypeOf<string>();
  expect(data.tagColor).toBeDefined();
  expectTypeOf(data.tagColor).toEqualTypeOf<Color | null>();
  expect(data.expHistory).toBeDefined();
  expectTypeOf(data.expHistory).toEqualTypeOf<ExpHistory[]>();
  expect(data.achievements).toBeDefined();
  expectTypeOf(data.achievements).toEqualTypeOf<{ winners: number; experienceKings: number; onlinePlayers: number }>();
  expect(data.achievements.winners).toBeDefined();
  expectTypeOf(data.achievements.winners).toEqualTypeOf<number>();
  expect(data.achievements.winners).toBeGreaterThanOrEqual(0);
  expect(data.achievements.experienceKings).toBeDefined();
  expectTypeOf(data.achievements.experienceKings).toEqualTypeOf<number>();
  expect(data.achievements.experienceKings).toBeGreaterThanOrEqual(0);
  expect(data.preferredGames).toBeDefined();
  expectTypeOf(data.preferredGames).toEqualTypeOf<Game[]>();
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
  expect(data.guildMaster()).toBeDefined();
  expect(data.guildMaster()).toBeInstanceOf(GuildMember);
  expect(['Guild Master', 'GUILDMASTER']).toContain(data.guildMaster().rank);
  expectTypeOf(data.guildMaster()).toEqualTypeOf<GuildMember>();
  client.destroy();
});
