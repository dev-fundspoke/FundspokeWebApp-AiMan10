import React from 'react';
import { Button } from 'antd';
import { GlowingBorder } from '../../common/GlowingBorder';
import { useThemeContext } from '../../../context/ThemeContext';
import { darkTheme } from '../../../styles/themes/dark';

interface SciFiQuickActionProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  glowColor?: 'primary' | 'secondary' | 'tertiary';
}

export const SciFiQuickAction: React.FC<SciFiQuickActionProps> = ({
  icon,
  label,
  onClick,
  glowColor = 'primary',
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const accentColor = darkTheme.colors.accent[glowColor];

  return (
    <GlowingBorder glowColor={glowColor}>
      <Button
        type="text"
        onClick={onClick}
        className="w-full h-full p-4 group transition-all duration-300 hover:scale-105"
        style={{
          background: isDark 
            ? darkTheme.effects.glass.background 
            : 'rgba(255, 255, 255, 0.7)',
          border: `1px solid ${darkTheme.effects.glass.border}`,
          backdropFilter: `blur(${darkTheme.effects.glass.blur})`,
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span 
            className="text-2xl transition-transform duration-300 group-hover:scale-110"
            style={{ 
              color: accentColor,
              filter: `drop-shadow(0 0 8px ${accentColor})`
            }}
          >
            {icon}
          </span>
          <span 
            className="text-sm font-medium"
            style={{ 
              color: isDark ? darkTheme.colors.text.primary : darkTheme.colors.text.secondary 
            }}
          >
            {label}
          </span>
        </div>
      </Button>
    </GlowingBorder>
  );
};