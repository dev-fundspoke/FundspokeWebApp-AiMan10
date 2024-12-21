import { darkTheme } from './dark';
import { lightTheme } from './light';
import type { Theme } from '../../types/theme';

export const getTheme = (theme: Theme) => theme === 'dark' ? darkTheme : lightTheme;

export const effects = {
  glow: {
    intensity: {
      low: '0 0 10px',
      medium: '0 0 20px',
      high: '0 0 30px',
    },
    opacity: {
      dark: 0.8,
      light: 0.4,
    },
  },
  glass: {
    blur: '12px',
    opacity: {
      dark: 0.7,
      light: 0.8,
    },
  },
};