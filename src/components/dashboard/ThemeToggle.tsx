import React from 'react';
import { Button } from 'antd';
import { useThemeContext } from '../../context/ThemeContext';
import { HolographicContainer } from '../common/HolographicContainer';
import { designSystem } from '../../styles/design-system';
import type { ThemedComponentProps } from '../../types/theme';

export const ThemeToggle: React.FC<ThemedComponentProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <Button
      type="text"
      onClick={toggleTheme}
      className={`relative overflow-hidden group ${className}`}
      style={{
        width: '40px',
        height: '40px',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <HolographicContainer
        glowColor={isDark ? 'secondary' : 'primary'}
        glowIntensity="low"
        className="w-full h-full flex items-center justify-center"
      >
        <div 
          className={`
            transform transition-transform duration-300 
            ${isDark ? 'rotate-180' : 'rotate-0'}
          `}
        >
          {isDark ? (
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className="w-5 h-5"
              style={{ 
                color: designSystem.colors.secondary[400],
                filter: `drop-shadow(0 0 4px ${designSystem.colors.secondary[400]})` 
              }}
            >
              <path
                d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className="w-5 h-5"
              style={{ 
                color: designSystem.colors.primary[400],
                filter: `drop-shadow(0 0 4px ${designSystem.colors.primary[400]})` 
              }}
            >
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <line
                  key={angle}
                  x1="12"
                  y1="12"
                  x2="12"
                  y2="8"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  transform={`rotate(${angle} 12 12)`}
                  className="origin-center"
                />
              ))}
            </svg>
          )}
        </div>
      </HolographicContainer>
    </Button>
  );
};