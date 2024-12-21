export interface Metric {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  color?: string;
}

export interface RecentActivity {
  id: string;
  action: string;
  timestamp: string;
  description: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

export interface ChartData {
  name: string;
  value: number;
}