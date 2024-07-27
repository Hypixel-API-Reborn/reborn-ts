function validateJSON(obj: any) {
  return 'object' === typeof obj && '{' === JSON.stringify(obj)[0];
}

function recursive(obj: Record<string, any>, lowerCase: boolean = false): any {
  if (!validateJSON(obj)) return obj;
  return Object.keys(obj).reduce(
    (pV, cV) => ({
      ...pV,
      [(lowerCase ? cV : cV.toLowerCase()).replace(/_[a-z]/gi, (x) => x[1].toUpperCase())]: recursive(obj[cV])
    }),
    {}
  );
}

function removeSnakeCaseString(str: string): string {
  return str.toLowerCase().replace(/_[a-z]/gi, (x) => x[1].toUpperCase());
}
