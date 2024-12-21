import React from 'react';
import { Layout } from 'antd';
import { SciFiLogo } from './SciFiLogo';
import { SciFiNav } from './SciFiNav';
import { darkTheme } from '../../../styles/themes/dark';

const { Header } = Layout;

export const SciFiHeader: React.FC = () => {
  return (
    <Header
      className="fixed w-full z-50 px-6 flex items-center justify-between"
      style={{
        height: '70px',
        background: darkTheme.effects.glass.background,
        backdropFilter: `blur(${darkTheme.effects.glass.blur})`,
        borderBottom: `1px solid ${darkTheme.effects.glass.border}`,
      }}
    >
      <SciFiLogo />
      <SciFiNav />
    </Header>
  );
};