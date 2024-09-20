import ChocolateFactory, {
  ChocolateFactoryChocolate,
  ChocolateFactoryEmployees,
  ChocolateFactoryGoldenClick,
  ChocolateFactoryTimeTower,
  ChocolateFactoryUpgrades
} from './ChocolateFactory';
import { expect, expectTypeOf, test } from 'vitest';

test('ChocolateFactory (Employees)', () => {
  const data = new ChocolateFactoryEmployees({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(ChocolateFactoryEmployees);
  expectTypeOf(data).toEqualTypeOf<ChocolateFactoryEmployees>();
  expect(data.bro).toBeDefined();
  expect(data.bro).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bro).toEqualTypeOf<number>();
  expect(data.cousin).toBeDefined();
  expect(data.cousin).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.cousin).toEqualTypeOf<number>();
  expect(data.sis).toBeDefined();
  expect(data.sis).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.sis).toEqualTypeOf<number>();
  expect(data.father).toBeDefined();
  expect(data.father).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.father).toEqualTypeOf<number>();
  expect(data.grandma).toBeDefined();
  expect(data.grandma).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.grandma).toEqualTypeOf<number>();
  expect(data.dog).toBeDefined();
  expect(data.dog).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.dog).toEqualTypeOf<number>();
  expect(data.uncle).toBeDefined();
  expect(data.uncle).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.uncle).toEqualTypeOf<number>();
});

test('ChocolateFactory (Chocolate)', () => {
  const data = new ChocolateFactoryChocolate({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(ChocolateFactoryChocolate);
  expectTypeOf(data).toEqualTypeOf<ChocolateFactoryChocolate>();
  expect(data.current).toBeDefined();
  expect(data.current).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.current).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expect(data.total).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.total).toEqualTypeOf<number>();
  expect(data.sincePrestige).toBeDefined();
  expect(data.sincePrestige).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.sincePrestige).toEqualTypeOf<number>();
});

test('ChocolateFactory (TimeTower)', () => {
  const data = new ChocolateFactoryTimeTower({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(ChocolateFactoryTimeTower);
  expectTypeOf(data).toEqualTypeOf<ChocolateFactoryTimeTower>();
  expect(data.charges).toBeDefined();
  expect(data.charges).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.charges).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expect(data.level).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.level).toEqualTypeOf<number>();
});

test('ChocolateFactory (Upgrades)', () => {
  const data = new ChocolateFactoryUpgrades({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(ChocolateFactoryUpgrades);
  expectTypeOf(data).toEqualTypeOf<ChocolateFactoryUpgrades>();
  expect(data.click).toBeDefined();
  expect(data.click).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.click).toEqualTypeOf<number>();
  expect(data.multiplier).toBeDefined();
  expect(data.multiplier).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.multiplier).toEqualTypeOf<number>();
  expect(data.rabbitRarity).toBeDefined();
  expect(data.rabbitRarity).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.rabbitRarity).toEqualTypeOf<number>();
});

test('ChocolateFactory (GoldenClick)', () => {
  const data = new ChocolateFactoryGoldenClick({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(ChocolateFactoryGoldenClick);
  expectTypeOf(data).toEqualTypeOf<ChocolateFactoryGoldenClick>();
  expect(data.amount).toBeDefined();
  expect(data.amount).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.amount).toEqualTypeOf<number>();
  expect(data.year).toBeDefined();
  expect(data.year).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.year).toEqualTypeOf<number>();
});

test('ChocolateFactory', () => {
  const data = new ChocolateFactory({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).instanceOf(ChocolateFactory);
  expectTypeOf(data).toEqualTypeOf<ChocolateFactory>();
  expect(data.employees).toBeDefined();
  expect(data.employees).instanceof(ChocolateFactoryEmployees);
  expectTypeOf(data.employees).toEqualTypeOf<ChocolateFactoryEmployees>();
  expect(data.chocolate).toBeDefined();
  expect(data.chocolate).instanceof(ChocolateFactoryChocolate);
  expectTypeOf(data.chocolate).toEqualTypeOf<ChocolateFactoryChocolate>();
  expect(data.timeTower).toBeDefined();
  expect(data.timeTower).instanceof(ChocolateFactoryTimeTower);
  expectTypeOf(data.timeTower).toEqualTypeOf<ChocolateFactoryTimeTower>();
  expect(data.upgrades).toBeDefined();
  expect(data.upgrades).instanceof(ChocolateFactoryUpgrades);
  expectTypeOf(data.upgrades).toEqualTypeOf<ChocolateFactoryUpgrades>();
  expect(data.goldenClick).toBeDefined();
  expect(data.goldenClick).instanceof(ChocolateFactoryGoldenClick);
  expectTypeOf(data.goldenClick).toEqualTypeOf<ChocolateFactoryGoldenClick>();
  expect(data.barnCapacity).toBeDefined();
  expect(data.barnCapacity).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.barnCapacity).toEqualTypeOf<number>();
  expect(data.prestige).toBeDefined();
  expect(data.prestige).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.prestige).toEqualTypeOf<number>();
});
