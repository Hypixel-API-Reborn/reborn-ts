import GuildMember from './GuildMember.js';
import { ExpHistory } from '../../utils/Guild.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Guild Member', () => {
  const data = new GuildMember({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GuildMember);
  expectTypeOf(data).toEqualTypeOf<GuildMember>();
  expect(data.uuid).toBeDefined();
  expectTypeOf(data.uuid).toEqualTypeOf<string>();
  expect(data.joinedAtTimestamp).toBeDefined();
  expectTypeOf(data.joinedAtTimestamp).toEqualTypeOf<number | null>();
  expect(data.joinedAt).toBeDefined();
  expectTypeOf(data.joinedAt).toEqualTypeOf<Date | null>();
  expect(data.questParticipation).toBeDefined();
  expectTypeOf(data.questParticipation).toEqualTypeOf<number>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<string>();
  expect(data.mutedUntilTimestamp).toBeDefined();
  expectTypeOf(data.mutedUntilTimestamp).toEqualTypeOf<number | null>();
  expect(data.mutedUntil).toBeDefined();
  expectTypeOf(data.mutedUntil).toEqualTypeOf<Date | null>();
  expect(data.expHistory).toBeDefined();
  expectTypeOf(data.expHistory).toEqualTypeOf<ExpHistory[]>();
  expect(data.weeklyExperience).toBeDefined();
  expectTypeOf(data.weeklyExperience).toEqualTypeOf<number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.uuid);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});