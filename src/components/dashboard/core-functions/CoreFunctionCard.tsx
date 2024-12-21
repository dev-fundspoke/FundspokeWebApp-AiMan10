import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SciFiCard } from '../../common/SciFiCard';
import { GlowingText } from '../../common/GlowingText';
import { FuturisticButton } from '../../common/FuturisticButton';
import { useThemeContext } from '../../../context/ThemeContext';
import { darkTheme } from '../../../styles/themes/dark';
import type { NavigationItem } from '../../../types/navigation';

export const CoreFunctionCard: React.FC<NavigationItem> = ({
  icon,
  title,
  description,
  buttonText,
  glowColor,
  route,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <SciFiCard className="h-full p-8 flex flex-col justify-between">
      <div className="space-y-6">
        <div 
          className="text-3xl transition-transform duration-300 group-hover:scale-110"
          style={{ 
            color: glowColor,
            filter: `drop-shadow(0 0 8px ${glowColor})`
          }}
        >
          {icon}
        </div>
        
        <GlowingText 
          className="text-xl font-semibold block"
          color={glowColor}
          intensity="medium"
        >
          {title}
        </GlowingText>
        
        <p className={`${
          isDark ? 'text-gray-300' : 'text-gray-600'
        } text-sm leading-relaxed`}>
          {description}
        </p>
      </div>

      <FuturisticButton
        type="primary"
        size="large"
        block
        onClick={handleClick}
        className="mt-8"
        style={{
          background: isDark ? `${glowColor}20` : `${glowColor}10`,
          borderColor: glowColor,
          color: isDark ? darkTheme.colors.text.primary : '#2D3748',
        }}
      >
        {buttonText}
      </FuturisticButton>
    </SciFiCard>
  );
};