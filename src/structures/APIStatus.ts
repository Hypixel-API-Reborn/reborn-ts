import APIIncident from './APIIncident';
/**
 * API status class
 */
class APIStatus {
  sourceUrl: string | null;
  title: string | null;
  description: string | null;
  incidents: APIIncident[];
  currentIncidents: APIIncident[];
  constructor(data: Record<string, any>) {
    this.sourceUrl = data.feedUrl || null;
    this.title = data.title || null;
    this.description = data.description || null;
    this.incidents = data.items.map((x: any) => new APIIncident(x));
    this.currentIncidents = this.incidents.filter((i) => !i.isResolved);
  }

  toString(): string | null {
    return this.title;
  }
}

export default APIStatus;
