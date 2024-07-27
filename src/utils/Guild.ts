import GuildMember from '../structures/Guild/GuildMember';
import GuildRank from '../structures/Guild/GuildRank';
import { ExpHistory } from '../typings';

const dateRegExp = /(\d{4})-(\d{2})-(\d{2})/;

export function parseDate(date: Record<string, any>) {
  date[1] -= 1;
  return new Date(
    Math.round(new Date(new Date().setUTCFullYear(...(date as [any]))).setUTCHours(5, 0, 0) / 1000) * 1000
  );
}

export function parseHistory(historyData: Record<string, any>): ExpHistory[] {
  return Object.entries(historyData).map((x, index) => ({
    day: x[0],
    date: x[0].match(dateRegExp)
      ? parseDate(
          x[0]
            .match(dateRegExp)!
            .slice(1)
            .map((x) => parseInt(x, 10))
        )
      : undefined,
    exp: x[1] || 0,
    totalExp:
      Object.values(historyData)
        .slice(0, index + 1)
        .reduce((pV: any, cV: any) => pV + cV, 0) || 0
  }));
}

export function getGuildLevel(exp: number) {
  const EXP_NEEDED = [
    100000, 150000, 250000, 500000, 750000, 1000000, 1250000, 1500000, 2000000, 2500000, 2500000, 2500000, 2500000,
    2500000, 3000000
  ];

  let level = 0;

  for (let i = 0; 1000 >= i; i += 1) {
    let need;
    if (i >= EXP_NEEDED.length) {
      need = EXP_NEEDED[EXP_NEEDED.length - 1];
    } else {
      need = EXP_NEEDED[i];
    }

    if (0 > exp - need) {
      return Math.round((level + exp / need) * 100) / 100;
    }
    level += 1;
    exp -= need;
  }

  return 1000;
}

export function ranks(data: Record<string, any>) {
  return data.ranks && data.ranks.length
    ? data.ranks.map((r: any) => new GuildRank(r)).sort((a: any, b: any) => a.priority - b.priority)
    : [];
}

export function expLimit(exp: number) {
  return 2e5 < exp ? (7e5 < exp ? 2.5e5 + Math.round(exp * 0.03) : 2e5 + Math.round((exp - 2e5) / 10)) : exp;
}

export function calculateExpHistory(data: Record<string, any>): ExpHistory[] {
  const finalObj: any = {};
  for (const day of Object.keys(data.members[0].expHistory)) {
    let gexp = 0;
    for (const member of data.members) {
      gexp += member.expHistory[day] || 0;
    }
    finalObj[day] = expLimit(gexp);
  }
  return parseHistory(finalObj);
}

export function members(data: Record<string, any>): GuildMember[] {
  return data.members.length ? data.members.map((m: Record<string, any>) => new GuildMember(m)) : [];
}

export function totalWeeklyGexp(data: Record<string, any>) {
  return members(data)
    .map((m) => m.weeklyExperience)
    .reduce((acc: number, cur: number) => acc + cur);
}
