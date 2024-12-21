import React from 'react';
import { SciFiCard } from '../../common/SciFiCard';
import { GlowingText } from '../../common/GlowingText';
import { FuturisticButton } from '../../common/FuturisticButton';
import { useThemeContext } from '../../../context/ThemeContext';
import type { NavigationCardProps } from '../../../types/navigation';

export const SciFiNavigationCard: React.FC<NavigationCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  glowColor = '#00F0FF',
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <SciFiCard className="group w-full flex flex-col p-4 md:p-6">
      <div className="flex-1">
        <div className="text-3xl md:text-4xl mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        
        <GlowingText 
          className="text-lg md:text-xl font-medium mb-2"
          color={isDark ? '#00F0FF' : '#7B61FF'}
          intensity="medium"
        >
          {title}
        </GlowingText>
        
        <p className="text-sm md:text-base mb-4 md:mb-6 text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
          {description}
        </p>
      </div>
      
      <FuturisticButton 
        type="primary"
        size="large"
        block
        glowColor={glowColor}
        className="mt-auto group-hover:scale-105 transition-transform duration-300"
      >
        {buttonText}
      </FuturisticButton>
    </SciFiCard>
  );
};