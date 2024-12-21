import React from 'react';
import { List, Tooltip } from 'antd';
import { GlowingText } from '../../../common/GlowingText';
import { StatusTag } from './StatusTag';
import { useThemeContext } from '../../../../context/ThemeContext';
import type { Application } from '../../../../types/funding';

export const ApplicationItem: React.FC<Application> = ({
  companyName,
  status,
  submissionDate,
  fundingAmount,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <List.Item
      className="p-4 transition-colors duration-300"
      style={{ 
        border: 'none',
        background: 'transparent',
        marginBottom: '4px',
        borderRadius: '8px',
      }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex-1">
          <GlowingText className="text-lg font-medium mb-2">
            {companyName}
          </GlowingText>
          <div className="flex items-center gap-4">
            <StatusTag status={status} />
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