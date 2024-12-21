import React from 'react';
import { Progress, Tooltip } from 'antd';
import { HolographicCard } from '../../common/HolographicCard';
import { GlowingText } from '../../common/GlowingText';
import { ArrowUpOutlined, ArrowDownOutlined, MinusOutlined } from '@ant-design/icons';
import type { StatisticCardProps } from '../../../types/statistics';
import { designSystem } from '../../../styles/design-system';

const TrendIndicator: React.FC<{ trend: string; value: string }> = ({ trend, value }) => {
  const getIcon = () => {
    switch (trend) {
      case 'up':
        return <ArrowUpOutlined className="text-accent-500" />;
      case 'down':
        return <ArrowDownOutlined className="text-red-500" />;
      default:
        return <MinusOutlined className="text-neutral-500" />;
    }
  };

  return (
    <Tooltip title={`${trend === 'up' ? 'Increased' : trend === 'down' ? 'Decreased' : 'No change'} by ${value}`}>
      <span className="flex items-center gap-1 text-sm">
        {getIcon()}
        {value}
      </span>
    </Tooltip>
  );
};

export const FuturisticStatCard: React.FC<StatisticCardProps> = ({
  title,
  value,
  suffix = '',
  type,
  progress = 0,
  trend,
  trendValue,
}) => {
  return (
    <HolographicCard
      className="h-full"
      variant={type === 'progress' ? 'primary' : type === 'circle' ? 'secondary' : 'accent'}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <GlowingText className="text-lg" intensity="low">
            {title}
          </GlowingText>
          <TrendIndicator trend={trend} value={trendValue} />
        </div>
        
        <GlowingText className="text-3xl font-bold mb-4" intensity="high">
          {value}{suffix}
        </GlowingText>

        {type === 'progress' && (
          <Progress 
            percent={progress}
            strokeColor={{
              '0%': designSystem.colors.primary[400],
              '100%': designSystem.colors.primary[600]
            }}
            size="small"
            className="glow-effect"
          />
        )}

        {type === 'circle' && (
          <Progress
            type="circle"
            percent={progress}
            strokeColor={{
              '0%': designSystem.colors.secondary[400],
              '100%': designSystem.colors.secondary[600]
            }}
            className="glow-effect"
          />
        )}
      </div>
    </HolographicCard>
  );
};