import React from 'react';
import { Spin } from 'antd';
import { GlowingText } from './GlowingText';
import { darkTheme } from '../../styles/themes/dark';

interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = 'Loading...' 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <Spin size="large" />
      <GlowingText 
        className="text-lg"
        color={darkTheme.colors.accent.primary}
      >
        {message}
      </GlowingText>
    </div>
  );
};