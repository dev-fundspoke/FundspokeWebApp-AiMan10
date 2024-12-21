import React from 'react';
import { Line } from '@ant-design/charts';
import { useThemeContext } from '../../../context/ThemeContext';
import { darkTheme } from '../../../styles/themes/dark';

const data = Array.from({ length: 12 }, (_, i) => ({
  month: `${i + 1}`.padStart(2, '0'),
  rate: Math.floor(Math.random() * 30) + 60,
}));

export const SuccessRateChart: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  const config = {
    data,
    xField: 'month',
    yField: 'rate',
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
      shape: 'triangle',
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
  };

  return <Line {...config} height={200} />;
};