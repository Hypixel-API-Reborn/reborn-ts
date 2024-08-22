class WatchdogStats {
  byWatchdogTotal: number;
  byWatchdogLastMinute: number;
  byWatchdogRollingDay: number;
  byStaffTotal: number;
  byStaffRollingDay: number;
  constructor(data: Record<string, any>) {
    this.byWatchdogTotal = data.watchdog_total;
    this.byWatchdogLastMinute = data.watchdog_lastMinute;
    this.byWatchdogRollingDay = data.watchdog_rollingDaily;
    this.byStaffTotal = data.staff_total;
    this.byStaffRollingDay = data.staff_rollingDaily;
  }
}

export default WatchdogStats;
