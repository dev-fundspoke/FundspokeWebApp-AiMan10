import React from 'react';
import { Timeline } from 'antd';
import { ActivityItem } from './ActivityItem';
import { useThemeContext } from '../../../context/ThemeContext';
import type { Activity } from '../../../types/activity';

const activities: Activity[] = [
  {
    id: '1',
    title: 'Grant Submission',
    description: 'AI Innovation Catalyst grant submitted',
    timestamp: '2024-12-01',
    type: 'success',
    icon: 'check',
  },
  {
    id: '2',
    title: 'Company Update',
    description: 'Company settings updated for InnovAI Tech',
    timestamp: '2024-11-28',
    type: 'info',
    icon: 'info',
  },
  {
    id: '3',
    title: 'Grant Approval',
    description: 'GreenTech Program grant application approved',
    timestamp: '2024-10-15',
    type: 'success',
    icon: 'check',
  },
];

export const ActivityTimeline: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <Timeline
      className={isDark ? 'dark-timeline' : ''}
      items={activities.map((activity) => ({
        children: <ActivityItem {...activity} />,
        color: activity.type === 'success' ? 'success' : 
               activity.type === 'info' ? 'primary' : 
               'warning'
      }))}
    />
  );
};