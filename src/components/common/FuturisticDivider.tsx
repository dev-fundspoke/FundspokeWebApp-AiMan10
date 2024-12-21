import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { effects } from '../../styles/effects';

interface FuturisticDividerProps {
  className?: string;
  glowColor?: keyof typeof effects.glow.colors;
}

export const FuturisticDivider: React.FC<FuturisticDividerProps> = ({
  className = '',
  glowColor = 'primary',
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <div
      className={`h-px w-full my-4 ${className}`}
      style={{
        background: `linear-gradient(
          90deg,
          transparent 0%,
          ${effects.glow.colors[glowColor]} 50%,
          transparent 100%
        )`,
        boxShadow: `0 0 10px ${effects.glow.colors[glowColor]}`,
        opacity: isDark ? 0.3 : 0.2,
      }}
    />
  );
};