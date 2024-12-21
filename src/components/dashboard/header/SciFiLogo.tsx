import React from 'react';
import { GlowingText } from '../../common/GlowingText';
import { darkTheme } from '../../../styles/themes/dark';

export const SciFiLogo: React.FC = () => {
  return (
    <GlowingText
      className="text-2xl font-bold"
      color={darkTheme.colors.accent.primary}
      intensity="high"
    >
      FundSpoke
    </GlowingText>
  );
};