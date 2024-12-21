import React from 'react';
import { Line } from '@ant-design/charts';
import { useThemeContext } from '../../../context/ThemeContext';
import { darkTheme } from '../../../styles/themes/dark';

// Generate cumulative funding data
const generateCumulativeData = () => {
  let cumulative = 0;
  return Array.from({ length: 12 }, (_, i) => {
    const monthlyFunding = Math.floor(Math.random() * 500000) + 200000;
    cumulative += monthlyFunding;
    return {
      month: `${i + 1}`.padStart(2, '0'),
      value: cumulative,
    };
  });
};

export const CumulativeFundingChart: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const data = generateCumulativeData();

  const config = {
    data,
    xField: 'month',
    yField: 'value',
    smooth: true,
    animation: {
      appear: {
        animation: 'wave-in',
        duration: 1500,
      },
    },
    theme: isDark ? 'dark' : 'light',
    color: darkTheme.colors.accent.primary,
    lineStyle: {
      lineWidth: 3,
      shadowColor: darkTheme.colors.accent.primary,
      shadowBlur: 10,
    },
    point: {
      size: 6,
      shape: 'circle',
      style: {
        fill: darkTheme.colors.background.primary,
        stroke: darkTheme.colors.accent.primary,
        lineWidth: 2,
      },
    },
    grid: {
      line: {
        style: {
          stroke: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1,
          lineDash: [4, 4],
        },
      },
    },
    yAxis: {
      label: {
        formatter: (value: number) => `$${(value / 1000000).toFixed(1)}M`,
      },
    },
  };

  return <Line {...config} height={300} />;
};