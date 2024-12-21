import React from 'react';
import { Badge, Avatar } from 'antd';
import { BellOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { ThemeToggle } from '../ThemeToggle';
import { darkTheme } from '../../../styles/themes/dark';

export const SciFiNav: React.FC = () => {
  const iconStyle = {
    fontSize: '20px',
    color: darkTheme.colors.text.primary,
    filter: `drop-shadow(0 0 4px ${darkTheme.colors.accent.primary})`,
  };

  return (
    <div className="flex items-center space-x-6">
      <Badge 
        count={3} 
        className="cursor-pointer hover:scale-110 transition-transform duration-300"
      >
        <BellOutlined style={iconStyle} />
      </Badge>
      
      <SettingOutlined 
        className="cursor-pointer hover:scale-110 transition-transform duration-300"
        style={iconStyle}
      />
      
      <ThemeToggle />
      
      <Avatar
        icon={<UserOutlined />}
        className="cursor-pointer hover:scale-110 transition-transform duration-300"
        style={{ 
          background: darkTheme.colors.accent.primary,
          boxShadow: `0 0 10px ${darkTheme.colors.accent.primary}`,
        }}
      />
    </div>
  );
};