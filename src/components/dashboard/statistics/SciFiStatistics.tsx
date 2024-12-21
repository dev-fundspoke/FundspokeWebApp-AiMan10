import React from 'react';
import { Row, Col } from 'antd';
import { SciFiStatCard } from './SciFiStatCard';

const statistics = [
  {
    title: 'Active Projects',
    value: 12,
    type: 'progress' as const,
    progress: 75,
    trend: 'up' as const,
    trendValue: '+15%',
  },
  {
    title: 'Success Rate',
    value: 89,
    suffix: '%',
    type: 'progress' as const,
    progress: 89,
    trend: 'up' as const,
    trendValue: '+5%',
  },
  {
    title: 'Total Funding',
    value: 2.5,
    suffix: 'M',
    type: 'progress' as const,
    progress: 62,
    trend: 'up' as const,
    trendValue: '+12%',
  },
  {
    title: 'Active Users',
    value: 847,
    type: 'progress' as const,
    progress: 84,
    trend: 'up' as const,
    trendValue: '+23%',
  },
];

export const SciFiStatistics: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      {statistics.map((stat, index) => (
        <Col xs={24} sm={12} lg={6} key={index}>
          <SciFiStatCard {...stat} />
        </Col>
      ))}
    </Row>
  );
};