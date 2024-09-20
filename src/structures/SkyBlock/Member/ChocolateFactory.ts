export class ChocolateFactoryEmployees {
  bro: number;
  cousin: number;
  sis: number;
  father: number;
  grandma: number;
  dog: number;
  uncle: number;
  constructor(data: Record<string, any>) {
    this.bro = data?.events?.easter?.employees?.rabbit_bro || 0;
    this.cousin = data?.events?.easter?.employees?.rabbit_cousin || 0;
    this.sis = data?.events?.easter?.employees?.rabbit_sis || 0;
    this.father = data?.events?.easter?.employees?.rabbit_father || 0;
    this.grandma = data?.events?.easter?.employees?.rabbit_grandma || 0;
    this.dog = data?.events?.easter?.employees?.rabbit_dog || 0;
    this.uncle = data?.events?.easter?.employees?.rabbit_uncle || 0;
  }
}

export class ChocolateFactoryChocolate {
  current: number;
  total: number;
  sincePrestige: number;
  constructor(data: Record<string, any>) {
    this.current = data?.events?.easter?.chocolate || 0;
    this.total = data?.events?.easter?.total_chocolate || 0;
    this.sincePrestige = data?.events?.easter?.chocolate_since_prestige || 0;
  }
}

export class ChocolateFactoryTimeTower {
  charges: number;
  level: number;
  constructor(data: Record<string, any>) {
    this.charges = data?.events?.easter?.time_tower?.charges || 0;
    this.level = data?.events?.easter?.time_tower?.level || 0;
  }
}

export class ChocolateFactoryUpgrades {
  click: number;
  multiplier: number;
  rabbitRarity: number;
  constructor(data: Record<string, any>) {
    this.click = data?.events?.easter?.click_upgrades || 0;
    this.multiplier = data?.events?.easter?.chocolate_multiplier_upgrades || 0;
    this.rabbitRarity = data?.events?.easter?.rabbit_rarity_upgrades || 0;
  }
}

export class ChocolateFactoryGoldenClick {
  amount: number;
  year: number;
  constructor(data: Record<string, any>) {
    this.amount = data?.events?.easter?.golden_click_amount || 0;
    this.year = data?.events?.easter?.golden_click_year || 0;
  }
}

class ChocolateFactory {
  employees: ChocolateFactoryEmployees;
  chocolate: ChocolateFactoryChocolate;
  timeTower: ChocolateFactoryTimeTower;
  upgrades: ChocolateFactoryUpgrades;
  goldenClick: ChocolateFactoryGoldenClick;
  barnCapacity: number;
  prestige: number;
  constructor(data: Record<string, any>) {
    this.employees = new ChocolateFactoryEmployees(data);
    this.chocolate = new ChocolateFactoryChocolate(data);
    this.timeTower = new ChocolateFactoryTimeTower(data);
    this.upgrades = new ChocolateFactoryUpgrades(data);
    this.goldenClick = new ChocolateFactoryGoldenClick(data);
    this.barnCapacity = data?.events?.easter?.rabbit_barn_capacity_level || 0;
    this.prestige = data?.events?.easter?.chocolate_level || 0;
  }
}

export default ChocolateFactory;
