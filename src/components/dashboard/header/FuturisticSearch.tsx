import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useThemeContext } from '../../../context/ThemeContext';
import { designSystem } from '../../../styles/design-system';

const { Search } = Input;

export const FuturisticSearch: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <Search
      placeholder="Search for companies, applications, or grants..."
      prefix={<SearchOutlined className="text-primary-500" />}
      className="w-[400px] futuristic-search"
      size="large"
      style={{
        background: isDark ? 'rgba(20, 27, 45, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(8px)',
        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        boxShadow: `0 0 15px ${designSystem.colors.primary[500]}20`,
      }}
    />
  );
};