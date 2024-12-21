import React from 'react';
import { Card, Progress, Tooltip } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, MinusOutlined } from '@ant-design/icons';
import { useThemeContext } from '../../../context/ThemeContext';
import type { StatisticCardProps } from '../../../types/statistics';

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

export const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  value,
  suffix = '',
  type,
  progress = 0,
  trend,
  trendValue,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <Card 
      className={`h-full transition-all duration-300 ${
        isDark ? 'bg-dark-card hover:bg-dark-hover' : 'bg-white hover:shadow-lg'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className={`text-lg font-medium ${isDark ? 'text-neutral-200' : 'text-neutral-600'}`}>
            {title}
          </h3>
          <TrendIndicator trend={trend} value={trendValue} />
        </div>
        
        <div className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
          {value}{suffix}
        </div>

        {type === 'progress' && (
          <Progress 
            percent={progress}
            strokeColor={{
              '0%': isDark ? '#A3E635' : '#2563EB',
              '100%': isDark ? '#86EFAC' : '#1E40AF'
            }}
            size="small"
          />
        )}

        {type === 'circle' && (
          <Progress
            type="circle"
            percent={progress}
            strokeColor={{
              '0%': isDark ? '#A3E635' : '#2563EB',
              '100%': isDark ? '#86EFAC' : '#1E40AF'
            }}
          />
        )}
      </div>
    </Card>
  );
};