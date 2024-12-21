import { colors } from '../colors';

export const statisticsStyles = {
  light: {
    card: 'bg-white',
    text: {
      title: 'text-gray-600',
      value: 'text-gray-800',
    },
    chart: {
      background: 'bg-white',
      grid: 'stroke-gray-200',
      text: 'text-gray-600',
    },
  },
  dark: {
    card: `bg-[${colors.dark.cardBg}]`,
    text: {
      title: 'text-gray-300',
      value: 'text-white',
    },
    chart: {
      background: `bg-[${colors.dark.cardBg}]`,
      grid: 'stroke-gray-700',
      text: 'text-gray-300',
    },
  },
} as const;