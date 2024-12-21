import React from 'react';
import { Card } from 'antd';
import { useThemeContext } from '../../context/ThemeContext';
import type { CardProps } from 'antd';

interface HolographicCardProps extends CardProps {
  glowIntensity?: 'low' | 'medium' | 'high';
  variant?: 'primary' | 'secondary' | 'accent';
}

export const HolographicCard: React.FC<HolographicCardProps> = ({
  children,
  glowIntensity = 'medium',
  variant = 'primary',
  className = '',
  ...props
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  const getGlowColor = () => {
    switch (variant) {
      case 'secondary':
        return 'rgba(114, 46, 209, 0.2)';
      case 'accent':
        return 'rgba(19, 194, 194, 0.2)';
      default:
        return 'rgba(24, 144, 255, 0.2)';
    }
  };

  const getGlowIntensity = () => {
    switch (glowIntensity) {
      case 'low':
        return '0 0 15px';
      case 'high':
        return '0 0 30px';
      default:
        return '0 0 20px';
    }
  };

  return (
    <Card
      className={`holographic-card ${className} ${isDark ? 'dark' : ''}`}
      style={{
        background: isDark ? 'rgba(20, 27, 45, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(8px)',
        boxShadow: `${getGlowIntensity()} ${getGlowColor()}`,
        transition: 'all 0.3s ease',
      }}
      {...props}
    >
      {children}
    </Card>
  );
};