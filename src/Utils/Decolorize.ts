export default function Decolorize(str: string): string {
  return str.replace(/§[a-f0-9]/gi, '');
}
