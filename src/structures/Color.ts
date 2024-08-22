const ColorStrings: { [key: string]: string } = {
  BLACK: 'Black',
  DARK_BLUE: 'Dark Blue',
  DARK_GREEN: 'Dark Green',
  DARK_AQUA: 'Dark Aqua',
  DARK_RED: 'Dark Red',
  DARK_PURPLE: 'Dark Purple',
  GOLD: 'Gold',
  GRAY: 'Gray',
  DARK_GRAY: 'Dark Gray',
  BLUE: 'Blue',
  GREEN: 'Green',
  AQUA: 'Aqua',
  RED: 'Red',
  LIGHT_PURPLE: 'Light Purple',
  YELLOW: 'Yellow',
  WHITE: 'White'
};
const ColorHex: { [key: string]: string } = {
  BLACK: '#000000',
  DARK_BLUE: '#0000AA',
  DARK_GREEN: '#008000',
  DARK_AQUA: '#00AAAA',
  DARK_RED: '#AA0000',
  DARK_PURPLE: '#AA00AA',
  GOLD: '#FFAA00',
  GRAY: '#AAAAAA',
  DARK_GRAY: '#555555',
  BLUE: '#5555FF',
  GREEN: '#3CE63C',
  AQUA: '#3CE6E6',
  RED: '#FF5555',
  LIGHT_PURPLE: '#FF55FF',
  YELLOW: '#FFFF55',
  WHITE: '#FFFFFF'
};
const InGameCodes: { [key: string]: string } = {
  BLACK: '§0',
  DARK_BLUE: '§1',
  DARK_GREEN: '§2',
  DARK_AQUA: '§3',
  DARK_RED: '§4',
  DARK_PURPLE: '§5',
  GOLD: '§6',
  GRAY: '§7',
  DARK_GRAY: '§8',
  BLUE: '§9',
  GREEN: '§a',
  AQUA: '§b',
  RED: '§c',
  LIGHT_PURPLE: '§d',
  YELLOW: '§e',
  WHITE: '§f'
};

class Color {
  color: string;
  constructor(color: string) {
    this.color = color;
  }

  toString(): string {
    return ColorStrings[this.color];
  }

  toHex(): string {
    return ColorHex[this.color];
  }

  toCode(): string {
    return this.color;
  }

  toInGameCode() {
    return InGameCodes[this.color];
  }
}

export default Color;
