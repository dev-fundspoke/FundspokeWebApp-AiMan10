import React from 'react';
import { Input, Avatar, Badge, Dropdown } from 'antd';
import { 
  BellOutlined, 
  SettingOutlined, 
  UserOutlined, 
  SearchOutlined 
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const userMenuItems: MenuProps['items'] = [
  { key: 'profile', label: 'Profile' },
  { key: 'settings', label: 'Settings' },
  { key: 'logout', label: 'Logout' },
];

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-primary">FundSpoke</h1>
          <Input 
            placeholder="Search..." 
            prefix={<SearchOutlined />} 
            className="w-64"
          />
        </div>
        
        <div className="flex items-center space-x-6">
          <Badge count={5} className="cursor-pointer">
            <BellOutlined className="text-xl" />
          </Badge>
          <SettingOutlined className="text-xl cursor-pointer" />
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <Avatar icon={<UserOutlined />} className="cursor-pointer" />
          </Dropdown>
        </div>
      </div>
    </header>
  );
};