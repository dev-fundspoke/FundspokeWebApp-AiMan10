import React from 'react';
import { Badge, Avatar } from 'antd';
import { BellOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { ThemeToggle } from '../ThemeToggle';
import { useThemeContext } from '../../../context/ThemeContext';
import { designSystem } from '../../../styles/design-system';

export const FuturisticQuickNav: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const iconColor = isDark ? designSystem.colors.primary[400] : designSystem.colors.primary[500];

  return (
    <div className="flex items-center space-x-6">
      <Badge 
        count={5} 
        className="cursor-pointer hover:scale-110 transition-transform duration-300"
      >
        <BellOutlined className="text-xl" style={{ color: iconColor }} />
      </Badge>
      
      <SettingOutlined 
        className="text-xl cursor-pointer hover:scale-110 transition-transform duration-300" 
        style={{ color: iconColor }}
      />
      
      <ThemeToggle />
      
      <Avatar
        icon={<UserOutlined />}
        className="cursor-pointer hover:scale-110 transition-transform duration-300"
        style={{ 
          background: designSystem.colors.primary[500],
          boxShadow: `0 0 15px ${designSystem.colors.primary[500]}40`
        }}
      />
    </div>
  );
};