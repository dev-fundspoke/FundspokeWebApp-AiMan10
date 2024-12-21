import React, { useState } from 'react';
import { SciFiCard } from '../../common/SciFiCard';
import { GlowingText } from '../../common/GlowingText';
import { FilterSection } from './components/FilterSection';
import { ApplicationList } from './ApplicationList';
import { useThemeContext } from '../../../context/ThemeContext';
import { darkTheme } from '../../../styles/themes/dark';
import type { ApplicationStatus } from '../../../types/funding';

export const FundingStatusOverview: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');
  const [companyFilter, setCompanyFilter] = useState<string>('all');

  const handleStatusChange = (value: string) => {
    setStatusFilter(value as ApplicationStatus | 'all');
  };

  return (
    <section className="py-10">
      <GlowingText 
        className="text-2xl font-semibold mb-6"
        color={isDark ? darkTheme.colors.accent.primary : '#1890FF'}
      >
        Funding Application Status Overview
      </GlowingText>

      <SciFiCard className="p-6">
        <FilterSection 
          onStatusChange={handleStatusChange}
          onCompanyChange={setCompanyFilter}
        />
        <ApplicationList 
          statusFilter={statusFilter} 
          companyFilter={companyFilter}
        />
      </SciFiCard>
    </section>
  );
};