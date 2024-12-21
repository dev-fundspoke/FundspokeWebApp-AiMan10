import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { navigationStyles } from '../../styles/components/navigation';

interface SciFiCardProps {
  children: React.ReactNode;
  className?: string;
  isAnimated?: boolean;
}

export const SciFiCard: React.FC<SciFiCardProps> = ({
  children,
  className = '',
  isAnimated = true,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const styles = navigationStyles.card;

  return (
    <div
      className={`
        ${styles.container}
        ${isAnimated ? 'group hover:scale-105' : ''}
        ${className}
      `}
      style={{
        background: isDark 
          ? 'rgba(20, 29, 46, 0.7)' 
          : 'linear-gradient(145deg, #ffffff, #f5f5f5)',
        boxShadow: isDark 
          ? '0 4px 12px rgba(0, 0, 0, 0.15)' 
          : '5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff',
        transition: 'all 0.3s ease',
        borderRadius: '16px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};