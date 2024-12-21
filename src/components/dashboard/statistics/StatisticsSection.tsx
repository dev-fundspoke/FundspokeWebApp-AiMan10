import React from 'react';
import { Row, Col } from 'antd';
import { FuturisticStatCard } from './FuturisticStatCard';
import { GlowingText } from '../../common/GlowingText';
import { useThemeContext } from '../../../context/ThemeContext';
import type { TrendType } from '../../../types/statistics';

const statistics = [
  {
    title: 'Grants Applied',
    value: 32,
    suffix: ' Grants',
    type: 'progress' as const,
    progress: 70,
    trend: 'up' as TrendType,
    trendValue: '12%'
  },
  {
    title: 'Success Rate',
    value: 75,
    suffix: '%',
    type: 'circle' as const,
    progress: 75,
    trend: 'up' as TrendType,
    trendValue: '5%'
  },
  {
    title: 'Active Claims',
    value: 14,
    suffix: ' Claims',
    type: 'badge' as const,
    trend: 'down' as TrendType,
    trendValue: '3%'
  },
  {
    title: 'Pending Actions',
    value: 5,
    type: 'notification' as const,
    trend: 'neutral' as TrendType,
    trendValue: '0%'
  }
];

export const StatisticsSection: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <section className={`py-8 ${isDark ? 'bg-dark-bg' : 'bg-neutral-50'} rounded-2xl`}>
      <div className="px-6">
        <GlowingText className="text-2xl font-display font-semibold mb-6">
          Statistics Overview
        </GlowingText>
        <Row gutter={[16, 16]}>
          {statistics.map((stat, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <FuturisticStatCard {...stat} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};