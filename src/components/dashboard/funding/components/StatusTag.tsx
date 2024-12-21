import React from 'react';
import { Tag } from 'antd';
import { statusConfig } from '../config';
import type { ApplicationStatus } from '../../../../types/funding';

interface StatusTagProps {
  status: ApplicationStatus;
}

export const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  const config = statusConfig[status];

  return (
    <div 
      className="inline-block"
      style={{ 
        filter: `drop-shadow(${config.glow})`,
        transition: 'all 0.3s ease'
      }}
    >
      <Tag
        color={config.color}
        className="min-w-[120px] h-[32px] flex items-center justify-center m-0 text-sm font-medium"
      >
        {config.label}
      </Tag>
    </div>
  );
};