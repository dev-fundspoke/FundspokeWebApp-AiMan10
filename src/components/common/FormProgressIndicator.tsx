import React from 'react';
import { Progress } from 'antd';
import { GlowingText } from './GlowingText';
import { useFormProgress } from '../../hooks/useFormProgress';
import { darkTheme } from '../../styles/themes/dark';
import type { FormInstance } from 'antd/es/form';

interface FormProgressIndicatorProps {
  form: FormInstance;
  className?: string;
}

export const FormProgressIndicator: React.FC<FormProgressIndicatorProps> = ({
  form,
  className = '',
}) => {
  const progress = useFormProgress(form);

  const getStatusColor = () => {
    if (progress >= 100) return darkTheme.colors.accent.primary;
    if (progress >= 50) return darkTheme.colors.accent.secondary;
    return darkTheme.colors.accent.tertiary;
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <GlowingText 
        className="text-sm font-medium"
        color={getStatusColor()}
        intensity="low"
      >
        Form Progress: {progress}%
      </GlowingText>
      <Progress 
        percent={progress}
        strokeColor={{
          '0%': darkTheme.colors.accent.tertiary,
          '50%': darkTheme.colors.accent.secondary,
          '100%': darkTheme.colors.accent.primary,
        }}
        showInfo={false}
      />
    </div>
  );
};