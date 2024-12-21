import React from 'react';
import { Column } from '@ant-design/charts';
import { useThemeContext } from '../../../context/ThemeContext';
import { darkTheme } from '../../../styles/themes/dark';

const data = [
  { month: 'Jul', value: 89 },
  { month: 'Aug', value: 78 },
  { month: 'Sep', value: 92 },
  { month: 'Oct', value: 85 },
  { month: 'Nov', value: 94 },
].sort((a, b) => b.value - a.value);

export const TopMonthsChart: React.FC = () => {
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
    color: darkTheme.colors.accent.primary,
    columnStyle: {
      radius: [8, 8, 0, 0],
      fill: `l(270) 0:${darkTheme.colors.accent.primary}33 1:${darkTheme.colors.accent.primary}`,
      stroke: darkTheme.colors.accent.secondary,
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

  return <Column {...config} height={200} />;
};