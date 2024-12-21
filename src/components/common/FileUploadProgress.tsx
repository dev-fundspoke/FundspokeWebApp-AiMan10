import React from 'react';
import { Progress } from 'antd';
import { GlowingText } from './GlowingText';
import { darkTheme } from '../../styles/themes/dark';

interface FileUploadProgressProps {
  fileName: string;
  percent: number;
  status: 'active' | 'success' | 'error';
}

export const FileUploadProgress: React.FC<FileUploadProgressProps> = ({
  fileName,
  percent,
  status,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'success': return darkTheme.colors.accent.primary;
      case 'error': return darkTheme.colors.accent.tertiary;
      default: return darkTheme.colors.accent.secondary;
    }
  };

  return (
    <div className="space-y-2">
      <GlowingText 
        className="text-sm"
        color={getStatusColor()}
        intensity="low"
      >
        {fileName}
      </GlowingText>
      <Progress 
        percent={percent} 
        status={status === 'error' ? 'exception' : status === 'success' ? 'success' : 'active'}
        strokeColor={getStatusColor()}
      />
    </div>
  );
};