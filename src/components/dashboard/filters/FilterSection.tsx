import React from 'react';
import { Card } from 'antd';
import { FilterDropdowns } from './FilterDropdowns';
import { QuickSearch } from './QuickSearch';
import { useThemeContext } from '../../../context/ThemeContext';
import type { FiltersProps } from '../../../types/filters';

export const FiltersSection: React.FC<FiltersProps> = (props) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <section className={`px-6 py-8 ${isDark ? 'bg-dark-bg' : 'bg-neutral-50'} rounded-2xl`}>
      <Card className={`shadow-sm ${isDark ? 'bg-dark-card' : 'bg-white'}`}>
        <div className="space-y-6">
          <QuickSearch {...props} />
          <FilterDropdowns {...props} />
        </div>
      </Card>
    </section>
  );
};