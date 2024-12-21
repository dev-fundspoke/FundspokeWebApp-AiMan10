import React from 'react';
import { Card, Timeline } from 'antd';
import type { RecentActivity as RecentActivityType } from '../../types/dashboard';

const activities: RecentActivityType[] = [
  {
    id: '1',
    action: 'Application Submitted',
    timestamp: '2024-02-14 14:30',
    description: 'New funding application submitted for TechCorp Ltd.',
    type: 'success',
  },
  {
    id: '2',
    action: 'Document Update',
    timestamp: '2024-02-14 13:15',
    description: 'Financial statements updated for Project Alpha',
    type: 'info',
  },
  {
    id: '3',
    action: 'Review Required',
    timestamp: '2024-02-14 11:45',
    description: 'Application ABC123 requires additional review',
    type: 'warning',
  },
  {
    id: '4',
    action: 'Deadline Approaching',
    timestamp: '2024-02-14 10:00',
    description: 'Grant application deadline in 48 hours',
    type: 'error',
  },
];

export const RecentActivity: React.FC = () => {
  return (
    <Card title="Recent Activity" className="h-full">
      <Timeline
        items={activities.map(activity => ({
          color: activity.type === 'success' ? 'green' :
                 activity.type === 'info' ? 'blue' :
                 activity.type === 'warning' ? 'orange' : 'red',
          children: (
            <div key={activity.id}>
              <div className="font-medium">{activity.action}</div>
              <div className="text-sm text-gray-500">{activity.description}</div>
              <div className="text-xs text-gray-400">{activity.timestamp}</div>
            </div>
          ),
        }))}
      />
    </Card>
  );
};