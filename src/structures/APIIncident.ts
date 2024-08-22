const regex = /https:\/\/status.hypixel.net\/incidents\/([a-z0-9]+)/;

class APIIncident {
  link: string | null;
  start: Date | null;
  startFormatted: string | null;
  startTimestamp: number | null;
  author: string | null;
  HTMLContent: string;
  snippet: string | null;
  guid: string | null;
  categories: string[];
  isResolved: boolean;
  constructor(data: Record<string, any>) {
    this.link = data.link || null;
    this.start = data.pubDate ? new Date(data.pubDate) : null;
    this.startFormatted = data.pubDate || null;
    this.startTimestamp = new Date(data.pubDate).getTime() || null;
    this.author = data.creator || null;
    this.HTMLContent = data.content;
    this.snippet = data.contentSnippet || null;
    const match = data.guid ? regex.exec(data.guid) : null;
    this.guid = match ? match[1] : null;
    this.categories = data.categories || [];
    this.isResolved = this.HTMLContent.includes('Resolved -') || this.HTMLContent.includes('Completed -');
  }

  toString(): string {
    return this.HTMLContent;
  }
}

export default APIIncident;
