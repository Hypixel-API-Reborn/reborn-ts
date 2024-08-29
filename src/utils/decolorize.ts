export function decolorizeString(str: string): string {
  return str.replace(/§[a-f0-9]/gi, '');
}
