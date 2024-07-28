export const isStrArray = (input: string) => Array.isArray(input) || 'string' === typeof input;
export const strToArray = (input: string) => [input].flat();
