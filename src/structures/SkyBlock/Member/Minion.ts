class Minion {
  t1: boolean;
  t2: boolean;
  t3: boolean;
  t4: boolean;
  t5: boolean;
  t6: boolean;
  t7: boolean;
  t8: boolean;
  t9: boolean;
  t10: boolean;
  t11: boolean;
  t12: boolean;
  [key: string]: boolean;
  constructor(data: number[]) {
    this.t1 = false;
    this.t2 = false;
    this.t3 = false;
    this.t4 = false;
    this.t5 = false;
    this.t6 = false;
    this.t7 = false;
    this.t8 = false;
    this.t9 = false;
    this.t10 = false;
    this.t11 = false;
    this.t12 = false;
    data.forEach((tier) => {
      if (1 <= tier && 12 >= tier) {
        this[`t${tier}`] = true;
      }
    });
  }
}

function parseMiniondata(data: string[]): { [key: string]: number[] } {
  return data.reduce((acc: { [key: string]: number[] }, item: string) => {
    const lastUnderscoreIndex = item.lastIndexOf('_');
    if (-1 === lastUnderscoreIndex) return acc;
    const name = item.substring(0, lastUnderscoreIndex);
    const number = item.substring(lastUnderscoreIndex + 1);
    const num = parseInt(number, 10);
    if (isNaN(num)) return acc;
    if (!acc[name]) acc[name] = [];
    acc[name].push(num);
    return acc;
  }, {});
}

class Minions {
  [key: string]: Minion;
  constructor(data: string[]) {
    const parsed = parseMiniondata(data);
    Object.keys(parsed).forEach((minion) => {
      this[minion] = new Minion(parsed[minion]);
    });
  }
}

export default Minions;
