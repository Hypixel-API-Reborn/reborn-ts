export interface PlayerInfo {
  max: number;
  online: number;
  players: any[];
  toString(): string;
}

class ServerInfo {
  protocolUsed: number;
  versionInfo: string;
  players: PlayerInfo;
  rawMOTD: string;
  cleanMOTD: string;
  textMOTD: string;
  faviconB64: string;
  favicon: Buffer;
  ping: number;

  constructor(data: Record<string, any>, ping: string | number) {
    this.protocolUsed = data.version.protocol || 736;
    this.versionInfo = data.version.name || 'Unknown';
    this.players = {
      max: data.players.max || 0,
      online: data.players.online || 0,
      players: data.players.sample || [],
      toString: () => `${this.players.online}/${this.players.max}`
    };
    this.rawMOTD = data.description || '';
    this.cleanMOTD = this.rawMOTD.replace(/§[a-z0-9]/gi, '');
    this.textMOTD = this.cleanMOTD.replace(/^\s+/gm, '');
    this.faviconB64 = data.favicon;
    this.favicon = Buffer.from(this.faviconB64, 'base64');
    this.ping = parseInt(String(ping), 10);
  }
  toString(): string {
    return `${this.textMOTD} - ${this.players} Players (${this.ping} ms) - ${this.versionInfo}`;
  }
}

export default ServerInfo;
