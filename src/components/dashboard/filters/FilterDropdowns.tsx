import React from 'react';
import { Select } from 'antd';
import { useThemeContext } from '../../../context/ThemeContext';
import { useFilterOptions } from '../../../hooks/useFilterOptions';
import type { FiltersProps } from '../../../types/filters';

export const FilterDropdowns: React.FC<FiltersProps> = ({
  onDateRangeChange,
  onCompanyChange,
  onStatusChange,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const { dateRangeOptions, companyOptions, statusOptions } = useFilterOptions();

  const selectClass = `${isDark ? 'dark-select' : ''} min-w-[200px]`;

  return (
    <div className="flex flex-wrap gap-4">
      <Select
        placeholder="Select date range"
        options={dateRangeOptions}
        onChange={onDateRangeChange}
        className={selectClass}
        size="large"
      />
      <Select
        placeholder="Select company"
        options={companyOptions}
        onChange={onCompanyChange}
        className={selectClass}
        size="large"
      />
      <Select
        placeholder="Select status"
        options={statusOptions}
        onChange={onStatusChange}
        className={selectClass}
        size="large"
      />
    </div>
  );
};