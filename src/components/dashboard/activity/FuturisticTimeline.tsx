import React from 'react';
import { Timeline } from 'antd';
import { FuturisticActivityItem } from './FuturisticActivityItem';
import { useThemeContext } from '../../../context/ThemeContext';
import { designSystem } from '../../../styles/design-system';
import type { Activity } from '../../../types/activity';

const activities: Activity[] = [
  {
    id: '1',
    title: 'Grant Submission',
    description: 'AI Innovation Catalyst grant submitted',
    timestamp: '2024-12-01',
    type: 'success',
  },
  {
    id: '2',
    title: 'Company Update',
    description: 'Company settings updated for InnovAI Tech',
    timestamp: '2024-11-28',
    type: 'info',
  },
  {
    id: '3',
    title: 'Grant Approval',
    description: 'GreenTech Program grant application approved',
    timestamp: '2024-10-15',
    type: 'success',
  },
];

export const FuturisticTimeline: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <Timeline
      className={`${isDark ? 'dark-timeline' : ''} futuristic-timeline`}
      items={activities.map((activity) => ({
        children: <FuturisticActivityItem {...activity} />,
        color: activity.type === 'success' ? designSystem.colors.accent[500] : 
               activity.type === 'info' ? designSystem.colors.primary[500] : 
               designSystem.colors.secondary[500],
        className: 'timeline-item-hover'
      }))}
    />
  );
};