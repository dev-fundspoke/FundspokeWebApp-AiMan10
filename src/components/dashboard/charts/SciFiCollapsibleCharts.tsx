import React, { useState } from 'react';
import { Collapse, type CollapseProps } from 'antd';
import { BarChartOutlined } from '@ant-design/icons';
import { SciFiCard } from '../../common/SciFiCard';
import { GlowingText } from '../../common/GlowingText';
import { SuccessRateChart } from './SuccessRateChart';
import { TopMonthsChart } from './TopMonthsChart';
import { CumulativeFundingChart } from './CumulativeFundingChart';
import { FundingApplicationsChart } from './FundingApplicationsChart';
import { darkTheme } from '../../../styles/themes/dark';

export const SciFiCollapsibleCharts: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string | string[]>(['1']);

  const collapseItems: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <div className="flex items-center gap-3">
          <BarChartOutlined 
            className="text-xl"
            style={{ 
              color: darkTheme.colors.accent.primary,
              filter: `drop-shadow(0 0 4px ${darkTheme.colors.accent.primary})`
            }}
          />
          <GlowingText 
            className="text-lg font-semibold"
            color={darkTheme.colors.accent.primary}
          >
            Performance Analytics
          </GlowingText>
        </div>
      ),
      children: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          <div className="space-y-6">
            <SciFiCard className="p-6">
              <GlowingText 
                className="text-base font-medium mb-4"
                color={darkTheme.colors.accent.primary}
              >
                Cumulative Funding Received
              </GlowingText>
              <CumulativeFundingChart />
            </SciFiCard>
            <SciFiCard className="p-6">
              <GlowingText 
                className="text-base font-medium mb-4"
                color={darkTheme.colors.accent.secondary}
              >
                Success Rate Trends
              </GlowingText>
              <SuccessRateChart />
            </SciFiCard>
          </div>
          <div className="space-y-6">
            <SciFiCard className="p-6">
              <GlowingText 
                className="text-base font-medium mb-4"
                color={darkTheme.colors.accent.secondary}
              >
                Funding Applications Submitted
              </GlowingText>
              <FundingApplicationsChart />
            </SciFiCard>
            <SciFiCard className="p-6">
              <GlowingText 
                className="text-base font-medium mb-4"
                color={darkTheme.colors.accent.primary}
              >
                Top 5 Active Months
              </GlowingText>
              <TopMonthsChart />
            </SciFiCard>
          </div>
        </div>
      ),
    },
  ];

  return (
    <SciFiCard className="mt-6">
      <Collapse
        activeKey={activeKey}
        onChange={setActiveKey}
        expandIconPosition="end"
        items={collapseItems}
        className="sci-fi-collapse"
        style={{
          background: 'transparent',
          border: 'none',
        }}
      />
    </SciFiCard>
  );
};