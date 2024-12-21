import React from 'react';
import { Steps } from 'antd';
import { GlowingText } from './GlowingText';
import { darkTheme } from '../../styles/themes/dark';

interface FormStep {
  title: string;
  description?: string;
  status: 'wait' | 'process' | 'finish' | 'error';
}

interface FormStepIndicatorProps {
  steps: FormStep[];
  current: number;
  className?: string;
}

export const FormStepIndicator: React.FC<FormStepIndicatorProps> = ({
  steps,
  current,
  className = '',
}) => {
  return (
    <div className={className}>
      <Steps
        current={current}
        items={steps.map(step => ({
          title: (
            <GlowingText 
              color={
                step.status === 'finish' ? darkTheme.colors.accent.primary :
                step.status === 'process' ? darkTheme.colors.accent.secondary :
                darkTheme.colors.text.secondary
              }
              intensity="low"
            >
              {step.title}
            </GlowingText>
          ),
          description: step.description,
          status: step.status,
        }))}
      />
    </div>
  );
};