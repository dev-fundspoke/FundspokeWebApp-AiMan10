import React from 'react';
import { Layout } from 'antd';
import { Logo } from './Logo';
import { WelcomeMessage } from './WelcomeMessage';
import { QuickNav } from './QuickNav';
import { SearchBar } from './SearchBar';

const { Header } = Layout;

export const DashboardHeader: React.FC = () => {
  return (
    <Header 
      className="fixed w-full z-10 flex items-center justify-between px-6"
      style={{ 
        height: '70px',
        backgroundColor: '#008080',
      }}
    >
      <Logo />
      <div className="flex items-center space-x-8">
        <WelcomeMessage userName="User" />
        <SearchBar />
        <QuickNav />
      </div>
    </Header>
  );
};