import React from 'react';
import { SciFiCard } from '../../common/SciFiCard';
import { GlowingText } from '../../common/GlowingText';
import type { BaseComponentProps } from '../../../types/common';

interface BaseChartProps extends BaseComponentProps {
  title: string;
  chart: React.ReactNode;
}

export const BaseChart: React.FC<BaseChartProps> = ({
  title,
  chart,
  className = '',
}) => {
  return (
    <SciFiCard className={`p-6 ${className}`}>
      <GlowingText className="text-lg font-semibold mb-4">
        {title}
      </GlowingText>
      {chart}
    </SciFiCard>
  );
};