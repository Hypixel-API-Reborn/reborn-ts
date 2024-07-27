export default function (uuid: string) {
  const regexp = /^[0-9a-f]{32}$/i;
  uuid = uuid.replace(/-/g, '');
  return regexp.test(uuid);
}
