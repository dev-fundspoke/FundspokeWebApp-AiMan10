import React from 'react';
import { HolographicCard } from '../../common/HolographicCard';
import { FuturisticButton } from '../../common/FuturisticButton';
import { GlowingText } from '../../common/GlowingText';
import { useThemeContext } from '../../../context/ThemeContext';
import type { NavigationCardProps } from '../../../types/navigation';

export const FuturisticNavigationCard: React.FC<NavigationCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  glowColor,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <HolographicCard
      className="h-full flex flex-col justify-between group transition-all duration-300"
      glowIntensity="medium"
      style={{
        background: isDark 
          ? 'rgba(20, 27, 45, 0.7)'
          : 'rgba(255, 255, 255, 0.7)',
      }}
    >
      <div className="flex-1">
        <div 
          className="text-4xl mb-4 transition-all duration-300 group-hover:scale-110"
          style={{ 
            color: glowColor,
            filter: `drop-shadow(0 0 8px ${glowColor}80)`,
          }}
        >
          {icon}
        </div>
        <GlowingText 
          className="text-xl font-semibold mb-2"
          color={glowColor}
          intensity="low"
        >
          {title}
        </GlowingText>
        <p className={`mb-6 ${
          isDark ? 'text-neutral-400' : 'text-neutral-600'
        } transition-colors duration-300 group-hover:text-neutral-300`}>
          {description}
        </p>
      </div>
      <FuturisticButton 
        type="primary"
        size="large"
        block
        glowColor={`${glowColor}40`}
        className="group-hover:scale-105 transition-transform duration-300"
      >
        {buttonText}
      </FuturisticButton>
    </HolographicCard>
  );
};