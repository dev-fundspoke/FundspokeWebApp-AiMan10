import React from 'react';
import { List, Tag } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { GlowingText } from '../../common/GlowingText';
import { DeadlineProgress } from './DeadlineProgress';
import { useThemeContext } from '../../../context/ThemeContext';
import { getDeadlineStatus, calculateProgress, getDaysUntilDue } from '../../../utils/deadlineUtils';
import { deadlineStatusConfig } from '../../../config/deadlineConfig';
import type { DeadlineItem as DeadlineItemType } from '../../../types/deadline';

export const DeadlineItem: React.FC<DeadlineItemType> = ({
  title,
  description,
  dueDate,
  creationDate,
  companyName,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  
  const status = getDeadlineStatus(dueDate);
  const progress = calculateProgress(creationDate, dueDate);
  const daysUntil = getDaysUntilDue(dueDate);
  const config = deadlineStatusConfig[status];

  return (
    <List.Item
      className={`
        p-4 rounded-lg transition-all duration-300 
        ${isDark ? 'hover:bg-[#2F363D]' : 'hover:bg-gray-50'}
      `}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex-1">
          <GlowingText className="text-lg font-medium mb-2">
            {title}
          </GlowingText>
          <div className="text-sm text-gray-500 mb-2">{companyName}</div>
          {description && (
            <div className="text-sm text-gray-400 mb-2">{description}</div>
          )}
          <Tag
            icon={<ClockCircleOutlined />}
            color={config.color}
            style={{
              boxShadow: config.glow,
            }}
          >
            {config.label}
          </Tag>
        </div>
        
        <div className="flex items-center gap-6">
          <DeadlineProgress
            status={status}
            progress={progress}
            daysUntil={daysUntil}
          />
        </div>
      </div>
    </List.Item>
  );
};