import React from 'react';
import { Row, Col } from 'antd';
import { DualLineChart } from './DualLineChart';
import { SuccessRateChart } from './SuccessRateChart';
import { TopMonthsChart } from './TopMonthsChart';
import { SciFiCard } from '../../common/SciFiCard';
import { GlowingText } from '../../common/GlowingText';
import { darkTheme } from '../../../styles/themes/dark';

export const SciFiPerformanceCharts: React.FC = () => {
  return (
    <section className="mb-8">
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <SciFiCard className="p-6">
            <GlowingText 
              className="text-lg font-semibold mb-4"
              color={darkTheme.colors.accent.primary}
            >
              Performance Overview
            </GlowingText>
            <DualLineChart />
          </SciFiCard>
        </Col>
        <Col xs={24} lg={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <SciFiCard className="p-6">
                <GlowingText 
                  className="text-lg font-semibold mb-4"
                  color={darkTheme.colors.accent.secondary}
                >
                  Success Rate Trends
                </GlowingText>
                <SuccessRateChart />
              </SciFiCard>
            </Col>
            <Col xs={24}>
              <SciFiCard className="p-6">
                <GlowingText 
                  className="text-lg font-semibold mb-4"
                  color={darkTheme.colors.accent.primary}
                >
                  Top 5 Active Months
                </GlowingText>
                <TopMonthsChart />
              </SciFiCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};