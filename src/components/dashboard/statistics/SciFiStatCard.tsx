import React from 'react';
import { Progress } from 'antd';
import { SciFiCard } from '../../common/SciFiCard';
import { GlowingText } from '../../common/GlowingText';
import { darkTheme } from '../../../styles/themes/dark';
import type { StatisticCardProps } from '../../../types/statistics';

export const SciFiStatCard: React.FC<StatisticCardProps> = ({
  title,
  value,
  suffix = '',
  type,
  progress = 0,
  trend,
  trendValue,
}) => {
  return (
    <SciFiCard className="h-full p-6">
      <div className="flex flex-col h-full">
        <GlowingText className="text-lg mb-4" intensity="low">
          {title}
        </GlowingText>
        
        <div className="flex items-baseline gap-2 mb-4">
          <GlowingText className="text-3xl font-bold" intensity="high">
            {value}{suffix}
          </GlowingText>
          <span 
            className="text-sm"
            style={{ color: darkTheme.colors.text.secondary }}
          >
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
          </span>
        </div>

        {type === 'progress' && (
          <Progress
            percent={progress}
            strokeColor={{
              '0%': darkTheme.colors.accent.primary,
              '100%': darkTheme.colors.accent.secondary
            }}
            className="mt-auto"
          />
        )}
      </div>
    </SciFiCard>
  );
};