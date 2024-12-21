import React from 'react';
import { Layout } from 'antd';
import { GlowingText } from '../common/GlowingText';
import { FuturisticSearch } from './header/FuturisticSearch';
import { FuturisticQuickNav } from './header/FuturisticQuickNav';
import { useThemeContext } from '../../context/ThemeContext';
import { designSystem } from '../../styles/design-system';

const { Header } = Layout;

export const FuturisticHeader: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <Header 
      className="fixed w-full z-10 flex items-center justify-between px-6"
      style={{ 
        height: '70px',
        background: isDark 
          ? 'linear-gradient(180deg, rgba(10, 15, 30, 0.95) 0%, rgba(20, 27, 45, 0.9) 100%)'
          : 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 242, 245, 0.9) 100%)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        boxShadow: `0 4px 12px ${isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`,
      }}
    >
      <GlowingText 
        className="text-2xl font-bold"
        color={designSystem.colors.primary[500]}
        intensity="high"
      >
        FundSpoke
      </GlowingText>
      
      <div className="flex items-center space-x-8">
        <FuturisticSearch />
        <FuturisticQuickNav />
      </div>
    </Header>
  );
};