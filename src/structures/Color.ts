export type ColorCode =
  | 'BLACK'
  | 'DARK_BLUE'
  | 'DARK_GREEN'
  | 'DARK_AQUA'
  | 'DARK_RED'
  | 'DARK_PURPLE'
  | 'GOLD'
  | 'GRAY'
  | 'DARK_GRAY'
  | 'BLUE'
  | 'GREEN'
  | 'AQUA'
  | 'RED'
  | 'LIGHT_PURPLE'
  | 'YELLOW'
  | 'WHITE';
export type ColorString =
  | 'Black'
  | 'Dark Blue'
  | 'Dark Green'
  | 'Dark Aqua'
  | 'Dark Red'
  | 'Dark Purple'
  | 'Gold'
  | 'Gray'
  | 'Dark Gray'
  | 'Blue'
  | 'Green'
  | 'Aqua'
  | 'Red'
  | 'Light Purple'
  | 'Yellow'
  | 'White';
const ColorStrings: { [key: string]: ColorString } = {
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
export type ColorHex =
  | '#000000'
  | '#0000AA'
  | '#008000'
  | '#00AAAA'
  | '#AA0000'
  | '#AA00AA'
  | '#FFAA00'
  | '#AAAAAA'
  | '#555555'
  | '#5555FF'
  | '#3CE63C'
  | '#3CE6E6'
  | '#FF5555'
  | '#FF55FF'
  | '#FFFF55'
  | '#FFFFFF';
const ColorHexs: { [key: string]: ColorHex } = {
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
export type InGameCode =
  | '§0'
  | '§1'
  | '§2'
  | '§3'
  | '§4'
  | '§5'
  | '§6'
  | '§7'
  | '§8'
  | '§9'
  | '§a'
  | '§b'
  | '§c'
  | '§d'
  | '§e'
  | '§f';
const InGameCodes: { [key: string]: InGameCode } = {
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
  color: ColorCode;
  constructor(color: ColorCode) {
    this.color = color;
  }

  toString(): ColorString {
    return ColorStrings[this.color];
  }

  toHex(): ColorHex {
    return ColorHexs[this.color];
  }

  toCode(): ColorCode {
    return this.color;
  }

  toInGameCode(): InGameCode {
    return InGameCodes[this.color];
  }
}

export default Color;
