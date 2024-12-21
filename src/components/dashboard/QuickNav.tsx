import React from 'react';
import { Badge, Avatar } from 'antd';
import { BellOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { ThemeToggle } from './ThemeToggle';

export const QuickNav: React.FC = () => {
  return (
    <div className="flex items-center space-x-6">
      <Badge count={5} className="cursor-pointer">
        <BellOutlined className="text-xl text-white hover:text-[#A3E635]" />
      </Badge>
      <SettingOutlined className="text-xl text-white hover:text-[#A3E635] cursor-pointer" />
      <ThemeToggle />
      <Avatar
        icon={<UserOutlined />}
        className="cursor-pointer bg-[#A3E635]"
      />
    </div>
  );
};