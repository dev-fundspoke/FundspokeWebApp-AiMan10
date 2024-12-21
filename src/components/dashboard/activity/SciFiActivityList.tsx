import React from 'react';
import { SciFiCard } from '../../common/SciFiCard';
import { SciFiActivityItem } from './SciFiActivityItem';
import { GlowingText } from '../../common/GlowingText';
import { darkTheme } from '../../../styles/themes/dark';
import type { Activity } from '../../../types/activity';

const activities: Activity[] = [
  {
    id: '1',
    title: 'Neural Network Sync',
    description: 'Quantum data synchronization complete',
    timestamp: '2024-02-14 14:30',
    type: 'success',
  },
  {
    id: '2',
    title: 'AI Core Update',
    description: 'System intelligence matrix enhanced',
    timestamp: '2024-02-14 13:15',
    type: 'info',
  },
  {
    id: '3',
    title: 'Anomaly Detected',
    description: 'Quantum fluctuation requires attention',
    timestamp: '2024-02-14 11:45',
    type: 'warning',
  },
];

export const SciFiActivityList: React.FC = () => {
  return (
    <SciFiCard className="p-6">
      <GlowingText 
        className="text-xl font-semibold mb-6"
        color={darkTheme.colors.accent.primary}
      >
        Neural Activity Feed
      </GlowingText>
      
      <div className="space-y-4">
        {activities.map(activity => (
          <SciFiActivityItem key={activity.id} {...activity} />
        ))}
      </div>
    </SciFiCard>
  );
};