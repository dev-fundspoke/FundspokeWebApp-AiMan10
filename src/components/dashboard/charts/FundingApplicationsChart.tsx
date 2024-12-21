import React from 'react';
import { Column } from '@ant-design/charts';
import { useThemeContext } from '../../../context/ThemeContext';
import { darkTheme } from '../../../styles/themes/dark';

const data = Array.from({ length: 12 }, (_, i) => ({
  month: `${i + 1}`.padStart(2, '0'),
  value: Math.floor(Math.random() * 15) + 5,
}));

export const FundingApplicationsChart: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  const config = {
    data,
    xField: 'month',
    yField: 'value',
    animation: {
      appear: {
        animation: 'wave-in',
        duration: 1500,
      },
    },
    theme: isDark ? 'dark' : 'light',
    columnStyle: {
      radius: [8, 8, 0, 0],
      fill: `l(270) 0:${darkTheme.colors.accent.secondary}33 1:${darkTheme.colors.accent.secondary}`,
      stroke: darkTheme.colors.accent.primary,
      lineWidth: 2,
    },
    label: {
      position: 'top',
      style: {
        fill: isDark ? darkTheme.colors.text.primary : darkTheme.colors.text.secondary,
        fontSize: 12,
        fontWeight: 500,
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

  return <Column {...config} height={300} />;
};