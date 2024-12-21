import React from 'react';
import { List, Tag, Tooltip } from 'antd';
import { GlowingText } from '../../common/GlowingText';
import { useThemeContext } from '../../../context/ThemeContext';
import type { Application } from '../../../types/funding';

const statusConfig = {
  submitted: {
    color: '#1890FF',
    label: 'Submitted',
    glow: '0 0 10px rgba(24, 144, 255, 0.5)',
  },
  under_review: {
    color: '#722ED1',
    label: 'Under Review',
    glow: '0 0 10px rgba(114, 46, 209, 0.5)',
  },
  approved: {
    color: '#52C41A',
    label: 'Approved',
    glow: '0 0 10px rgba(82, 196, 26, 0.5)',
  },
  rejected: {
    color: '#FF4D4F',
    label: 'Rejected',
    glow: '0 0 10px rgba(255, 77, 79, 0.5)',
  },
  pending: {
    color: '#FAAD14',
    label: 'Pending',
    glow: '0 0 10px rgba(250, 173, 20, 0.5)',
  },
} as const;

export const ApplicationItem: React.FC<Application> = ({
  companyName,
  status,
  submissionDate,
  fundingAmount,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const config = statusConfig[status];

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
            {companyName}
          </GlowingText>
          <div className="flex items-center gap-4">
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
            <Tooltip title="Submission Date">
              <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                {submissionDate}
              </span>
            </Tooltip>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-lg font-semibold ${
            isDark ? 'text-gray-200' : 'text-gray-700'
          }`}>
            ${fundingAmount.toLocaleString()}
          </div>
        </div>
      </div>
    </List.Item>
  );
};