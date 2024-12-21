import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { effects } from '../../styles/effects';

interface SciFiIconProps {
  icon: React.ReactNode;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  isAnimated?: boolean;
  className?: string;
}

export const SciFiIcon: React.FC<SciFiIconProps> = ({
  icon,
  color,
  size = 'medium',
  isAnimated = true,
  className = '',
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  const getSize = () => {
    switch (size) {
      case 'small': return 'text-xl';
      case 'large': return 'text-4xl';
      default: return 'text-2xl';
    }
  };

  return (
    <div
      className={`
        inline-flex items-center justify-center
        ${getSize()}
        ${isAnimated ? 'animate-float' : ''}
        ${className}
      `}
      style={{
        color: color || (isDark ? effects.glow.colors.primary : effects.glow.colors.secondary),
        filter: `drop-shadow(0 0 8px ${color || effects.glow.colors.primary})`,
      }}
    >
      {icon}
    </div>
  );
};