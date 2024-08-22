export default function (bytes: any) {
  let numRead = 0;
  let result = 0;
  do {
    const read = bytes[numRead];
    const value = read & 0b01111111;
    result |= value << (7 * numRead);
    numRead++;
    if (5 < numRead) {
      return NaN;
    }
  } while (numRead < bytes.length);
  return result;
}
