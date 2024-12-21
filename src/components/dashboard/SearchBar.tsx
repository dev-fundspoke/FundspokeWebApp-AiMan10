import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export const SearchBar: React.FC = () => {
  return (
    <Search
      placeholder="Search for companies, applications, or grants..."
      className="w-[400px]"
      size="large"
    />
  );
};