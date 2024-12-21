import { getTheme } from '../styles/theme/index';
import type { Theme } from '../types/theme';

export const getBaseChartConfig = (theme: Theme) => {
  const currentTheme = getTheme(theme);
  
  return {
    animation: {
      appear: {
        animation: 'wave-in',
        duration: 1500,
      },
    },
    theme: theme === 'dark' ? 'dark' : 'light',
    grid: {
      line: {
        style: {
          stroke: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1,
          lineDash: [4, 4],
        },
      },
    },
    color: currentTheme.colors.accent.primary,
  };
};