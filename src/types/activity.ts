export interface Activity {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'success' | 'info' | 'warning';
  icon?: 'check' | 'info' | 'clock';
}