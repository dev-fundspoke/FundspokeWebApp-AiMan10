import React from 'react';
import { Tooltip } from 'antd';
import { CheckCircleOutlined, InfoCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { useThemeContext } from '../../../context/ThemeContext';
import type { Activity } from '../../../types/activity';

const iconMap = {
  success: <CheckCircleOutlined className="text-accent-500" />,
  info: <InfoCircleOutlined className="text-primary-500" />,
  warning: <ClockCircleOutlined className="text-amber-500" />,
};

export const ActivityItem: React.FC<Activity> = ({ 
  title, 
  description, 
  timestamp, 
  type 
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <div className="flex items-start space-x-3">
      <div className="mt-1">
        <Tooltip title={type.charAt(0).toUpperCase() + type.slice(1)}>
          {iconMap[type]}
        </Tooltip>
      </div>
      <div>
        <h4 className={`text-base font-medium m-0 ${
          isDark ? 'text-white' : 'text-neutral-800'
        }`}>
          {title}
        </h4>
        <p className={`text-sm mb-1 ${
          isDark ? 'text-neutral-300' : 'text-neutral-600'
        }`}>
          {description}
        </p>
        <span className={`text-xs ${
          isDark ? 'text-neutral-400' : 'text-neutral-500'
        }`}>
          {timestamp}
        </span>
      </div>
    </div>
  );
};