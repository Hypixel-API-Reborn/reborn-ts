export default function divide(a: number = 0, b: number = 1): number {
  const out: number = Number(((a || 0) / (b || 0)).toFixed(2)) || 0;
  if (isFinite(out)) return out;
  return a;
}
