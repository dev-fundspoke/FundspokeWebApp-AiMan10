import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';

interface GlowingTextProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export const GlowingText: React.FC<GlowingTextProps> = ({
  children,
  color = '#1890FF',
  className = '',
  intensity = 'medium',
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  const getGlowIntensity = () => {
    switch (intensity) {
      case 'low':
        return '2px';
      case 'high':
        return '6px';
      default:
        return '4px';
    }
  };

  return (
    <span
      className={`inline-block transition-all duration-300 ${className}`}
      style={{
        color,
        textShadow: `0 0 ${getGlowIntensity()} ${color}${isDark ? '80' : '40'}`,
      }}
    >
      {children}
    </span>
  );
};