class SocialMedia {
  name: string;
  link: string;
  id: string;
  constructor(data: { name: string; link: string; id: string }) {
    this.name = data.name;
    this.link = data.link;
    this.id = data.id;
  }
}

export function parseSocialMedia(links: Record<string, any>): SocialMedia[] {
  const formattedNames = ['Twitter', 'YouTube', 'Instagram', 'Twitch', 'Hypixel', 'Discord'];
  const upperNames = ['TWITTER', 'YOUTUBE', 'INSTAGRAM', 'TWITCH', 'HYPIXEL', 'DISCORD'];
  return Object.keys(links)
    .map((x) => upperNames.indexOf(x))
    .filter((x) => -1 !== x)
    .map((x) => new SocialMedia({ name: formattedNames[x], link: links[upperNames[x]], id: upperNames[x] }));
}

export default SocialMedia;
