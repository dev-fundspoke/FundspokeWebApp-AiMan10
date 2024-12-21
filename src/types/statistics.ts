export type TrendType = 'up' | 'down' | 'neutral';

export interface StatisticCardProps {
  title: string;
  value: number;
  suffix?: string;
  type: 'progress' | 'circle' | 'badge' | 'notification';
  progress?: number;
  trend: TrendType;
  trendValue: string;
}

export interface BadgeStatus {
  text: string;
  count: number;
  color: string;
}