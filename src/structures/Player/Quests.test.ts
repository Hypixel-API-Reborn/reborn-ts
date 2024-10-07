import Quests, { Quest, QuestCompletion, QuestCompletions } from './Quests.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Quest Completion', () => {
  const data = new QuestCompletion({ time: 1688570159583 });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(QuestCompletion);
  expectTypeOf(data).toEqualTypeOf<QuestCompletion>();
  expect(data.amount).toBeDefined();
  expectTypeOf(data.amount).toEqualTypeOf<number>();
  expect(data.timestamp).toBeDefined();
  expectTypeOf(data.timestamp).toEqualTypeOf<number>();
  expect(data.timestampAt).toBeDefined();
  expectTypeOf(data.timestampAt).toEqualTypeOf<Date>();
});

test('Quest Completions', () => {
  const data = new QuestCompletions([{ time: 1688570159583 }]);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(QuestCompletions);
  expectTypeOf(data).toEqualTypeOf<QuestCompletions>();
  expect(data.amount).toBeDefined();
  expectTypeOf(data.amount).toEqualTypeOf<number>();
  expect(data.completions).toBeDefined();
  expectTypeOf(data.completions).toEqualTypeOf<QuestCompletion[]>();
});

test('Quest', () => {
  const data = new Quest({ stats: 'meow' }, 'meow');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Quest);
  expectTypeOf(data).toEqualTypeOf<Quest>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.completions).toBeDefined();
  expectTypeOf(data.completions).toEqualTypeOf<QuestCompletions>();
});

test('Quests', () => {
  const data = new Quests({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Quests);
  expectTypeOf(data).toEqualTypeOf<Quests>();
  expect(data.quests).toBeDefined();
  expectTypeOf(data.quests).toEqualTypeOf<Quest[]>();
  expect(data.autoActivate).toBeDefined();
  expectTypeOf(data.autoActivate).toEqualTypeOf<boolean>();
});
