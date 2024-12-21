import { colors } from '../colors';

export const activityStyles = {
  light: {
    background: 'bg-white',
    timeline: {
      dot: 'border-blue-500',
      line: 'border-gray-200',
    },
    text: {
      primary: 'text-gray-800',
      secondary: 'text-gray-500',
      timestamp: 'text-gray-400',
    },
  },
  dark: {
    background: `bg-[${colors.dark.cardBg}]`,
    timeline: {
      dot: `border-[${colors.dark.accent.primary}]`,
      line: 'border-gray-700',
    },
    text: {
      primary: 'text-white',
      secondary: 'text-gray-300',
      timestamp: 'text-gray-400',
    },
  },
} as const;