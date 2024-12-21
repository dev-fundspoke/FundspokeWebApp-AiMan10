import React from 'react';
import { GlowingText } from './GlowingText';
import { useThemeContext } from '../../context/ThemeContext';
import { getTheme } from '../../styles/theme/index';
import type { Activity } from '../../types/activity';
import type { BaseComponentProps } from '../../types/common';

interface ActivityItemProps extends Activity, BaseComponentProps {}

export const ActivityItem: React.FC<ActivityItemProps> = ({
  title,
  description,
  timestamp,
  type,
  className = '',
}) => {
  const { theme } = useThemeContext();
  const currentTheme = getTheme(theme);

  const getTypeColor = () => {
    switch (type) {
      case 'success': return currentTheme.colors.accent.primary;
      case 'info': return currentTheme.colors.accent.secondary;
      case 'warning': return currentTheme.colors.accent.tertiary;
      default: return currentTheme.colors.text.primary;
    }
  };

  return (
    <div className={`group flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-opacity-10 hover:bg-white ${className}`}>
      <div 
        className="w-2 h-2 mt-2 rounded-full"
        style={{ 
          backgroundColor: getTypeColor(),
          boxShadow: `0 0 8px ${getTypeColor()}` 
        }}
      />
      
      <div className="flex-1">
        <GlowingText 
          className="text-base font-medium mb-1"
          color={getTypeColor()}
          intensity="low"
        >
          {title}
        </GlowingText>
        
        <p 
          className="text-sm mb-2"
          style={{ color: currentTheme.colors.text.secondary }}
        >
          {description}
        </p>
        
        <span 
          className="text-xs font-mono"
          style={{ color: currentTheme.colors.text.secondary }}
        >
          {timestamp}
        </span>
      </div>
    </div>
  );
};