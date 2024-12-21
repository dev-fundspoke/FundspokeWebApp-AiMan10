import React from 'react';
import { GlowingText } from '../../common/GlowingText';
import { darkTheme } from '../../../styles/themes/dark';
import type { Activity } from '../../../types/activity';

export const SciFiActivityItem: React.FC<Activity> = ({
  title,
  description,
  timestamp,
  type
}) => {
  const getTypeColor = () => {
    switch (type) {
      case 'success': return darkTheme.colors.accent.primary;
      case 'info': return darkTheme.colors.accent.secondary;
      case 'warning': return darkTheme.colors.accent.tertiary;
      default: return darkTheme.colors.text.primary;
    }
  };

  return (
    <div className="group flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-opacity-10 hover:bg-white">
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
          style={{ color: darkTheme.colors.text.secondary }}
        >
          {description}
        </p>
        
        <span 
          className="text-xs font-mono"
          style={{ color: darkTheme.colors.text.secondary }}
        >
          {timestamp}
        </span>
      </div>
    </div>
  );
};