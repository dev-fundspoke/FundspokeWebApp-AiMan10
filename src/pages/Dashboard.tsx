import React from 'react';
import { Layout } from 'antd';
import { SciFiHeader } from '../components/dashboard/header/SciFiHeader';
import { SciFiStatistics } from '../components/dashboard/statistics/SciFiStatistics';
import { CoreFunctionsSection } from '../components/dashboard/core-functions/CoreFunctionsSection';
import { SciFiCollapsibleCharts } from '../components/dashboard/charts/SciFiCollapsibleCharts';
import { FundingStatusOverview } from '../components/dashboard/funding/FundingStatusOverview';
import { SciFiFooter } from '../components/dashboard/footer/SciFiFooter';
import { useThemeContext } from '../context/ThemeContext';
import { darkTheme } from '../styles/themes/dark';

const { Content } = Layout;

export const Dashboard: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <Layout
      className="min-h-screen"
      style={{
        background: isDark ? darkTheme.colors.background.primary : '#FFFFFF',
      }}
    >
      <SciFiHeader />
      <Content className="pt-[90px] pb-12 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <SciFiStatistics />
          <CoreFunctionsSection />
          <SciFiCollapsibleCharts />
          <FundingStatusOverview />
        </div>
      </Content>
      <SciFiFooter />
    </Layout>
  );
};