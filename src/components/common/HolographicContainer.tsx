import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { effects } from '../../styles/effects';

interface HolographicContainerProps {
  children: React.ReactNode;
  className?: string;
  glowIntensity?: keyof typeof effects.glow.primary;
  glowColor?: keyof typeof effects.glow.colors;
  isAnimated?: boolean;
}

export const HolographicContainer: React.FC<HolographicContainerProps> = ({
  children,
  className = '',
  glowIntensity = 'medium',
  glowColor = 'primary',
  isAnimated = false,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const glassEffect = isDark ? effects.glass.dark : effects.glass.light;
  const gradient = isDark ? effects.gradients.dark : effects.gradients.light;

  return (
    <div
      className={`
        relative rounded-xl overflow-hidden
        ${isAnimated ? 'animate-holographic' : ''}
        ${className}
      `}
      style={{
        background: glassEffect.background,
        backdropFilter: effects.glass.blur,
        border: `1px solid ${glassEffect.border}`,
        boxShadow: `${effects.glow.primary[glowIntensity]} ${effects.glow.colors[glowColor]}`,
        backgroundImage: gradient.secondary,
      }}
    >
      {children}
    </div>
  );
};