import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { holographicStyles } from '../../styles/components/holographic';

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'primary' | 'secondary' | 'tertiary';
}

export const GlowingBorder: React.FC<GlowingBorderProps> = ({
  children,
  className = '',
  glowColor = 'primary',
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const glowStyle = holographicStyles.text.glow[glowColor];

  return (
    <div className={`relative ${className} glow-border-${glowColor}`}>
      <style>
        {`
          .glow-border-${glowColor}::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            box-shadow: ${glowStyle};
            opacity: ${isDark ? 0.8 : 0.4};
            pointer-events: none;
          }
        `}
      </style>
      {children}
    </div>
  );
};