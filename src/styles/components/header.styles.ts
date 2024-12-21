import { colors } from '../colors';

export const headerStyles = {
  light: {
    background: 'bg-white',
    text: 'text-gray-800',
    search: {
      background: 'bg-gray-100',
      text: 'text-gray-800',
      placeholder: 'text-gray-500',
    },
  },
  dark: {
    background: `bg-[${colors.dark.background}]`,
    text: 'text-white',
    search: {
      background: `bg-[${colors.dark.cardBg}]`,
      text: 'text-white',
      placeholder: 'text-gray-300',
    },
  },
} as const;