import React from 'react';
import { Tooltip } from 'antd';
import { CheckCircleOutlined, InfoCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { GlowingText } from '../../common/GlowingText';
import { designSystem } from '../../../styles/design-system';
import type { Activity } from '../../../types/activity';

const iconMap = {
  success: <CheckCircleOutlined style={{ color: designSystem.colors.accent[500] }} />,
  info: <InfoCircleOutlined style={{ color: designSystem.colors.primary[500] }} />,
  warning: <ClockCircleOutlined style={{ color: designSystem.colors.secondary[500] }} />,
};

export const FuturisticActivityItem: React.FC<Activity> = ({ 
  title, 
  description, 
  timestamp, 
  type 
}) => {
  return (
    <div className="flex items-start space-x-3 group">
      <div className="mt-1 transition-transform duration-300 group-hover:scale-110">
        <Tooltip title={type.charAt(0).toUpperCase() + type.slice(1)}>
          <span className="glow-effect">{iconMap[type]}</span>
        </Tooltip>
      </div>
      <div className="flex-1">
        <GlowingText className="text-base font-medium" intensity="low">
          {title}
        </GlowingText>
        <p className="text-sm mb-1 text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
          {description}
        </p>
        <span className="text-xs text-neutral-500 tech-text">
          {timestamp}
        </span>
      </div>
    </div>
  );
};