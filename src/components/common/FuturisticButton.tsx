import React from 'react';
import { Button } from 'antd';
import { useThemeContext } from '../../context/ThemeContext';
import type { ButtonProps } from 'antd';

interface FuturisticButtonProps extends ButtonProps {
  glowColor?: string;
}

export const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  glowColor,
  className = '',
  ...props
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <Button
      className={`futuristic-button ${className}`}
      style={{
        background: isDark ? 'rgba(24, 144, 255, 0.1)' : 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: `0 0 15px ${glowColor || 'rgba(24, 144, 255, 0.2)'}`,
        transition: 'all 0.3s ease',
      }}
      {...props}
    >
      {children}
    </Button>
  );
};