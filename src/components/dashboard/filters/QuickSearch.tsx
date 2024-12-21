import React from 'react';
import { Input } from 'antd';
import { useThemeContext } from '../../../context/ThemeContext';
import type { FiltersProps } from '../../../types/filters';

const { Search } = Input;

export const QuickSearch: React.FC<FiltersProps> = ({ onSearch }) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <Search
      placeholder="Search for companies, applications, or grants..."
      onSearch={onSearch}
      size="large"
      className={`w-full md:w-[400px] ${isDark ? 'dark-search' : ''}`}
    />
  );
};