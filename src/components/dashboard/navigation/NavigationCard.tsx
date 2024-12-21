import React from 'react';
import { Card, Button } from 'antd';
import { useThemeContext } from '../../../context/ThemeContext';
import type { NavigationCardProps } from '../../../types/navigation';

export const NavigationCard: React.FC<NavigationCardProps> = ({
  icon,
  title,
  description,
  buttonText,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <Card
      className={`h-full transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] ${
        isDark ? 'bg-dark-card' : 'bg-white'
      }`}
      styles={{
        body: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <div className="flex-1">
        <div className={`text-4xl mb-4 ${isDark ? 'text-dark-accent' : 'text-primary'}`}>
          {icon}
        </div>
        <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h3>
        <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
      <Button type="primary" size="large" block>
        {buttonText}
      </Button>
    </Card>
  );
};