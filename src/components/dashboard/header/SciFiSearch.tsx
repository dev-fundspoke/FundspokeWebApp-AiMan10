import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { darkTheme } from '../../../styles/themes/dark';

const { Search } = Input;

export const SciFiSearch: React.FC = () => {
  return (
    <Search
      placeholder="Search neural network..."
      prefix={
        <SearchOutlined 
          style={{ color: darkTheme.colors.accent.primary }} 
        />
      }
      className="w-[300px] search-bar"
      style={{
        background: 'rgba(36, 41, 46, 0.7)',
        borderColor: darkTheme.colors.border.primary,
      }}
    />
  );
};