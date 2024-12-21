import type { DeadlineStatusConfig } from '../types/deadline';

export const deadlineStatusConfig: Record<string, DeadlineStatusConfig> = {
  upcoming: {
    color: '#00FF9F',
    glow: '0 0 10px rgba(0, 255, 159, 0.5)',
    label: 'Upcoming',
  },
  dueSoon: {
    color: '#FFFF00',
    glow: '0 0 10px rgba(255, 255, 0, 0.5)',
    label: 'Due Soon',
  },
  overdue: {
    color: '#FF0000',
    glow: '0 0 10px rgba(255, 0, 0, 0.5)',
    label: 'Overdue',
  },
};