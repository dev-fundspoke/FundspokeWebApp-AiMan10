import { colors } from '../colors';

export const filterStyles = {
  light: {
    dropdown: {
      background: 'bg-white',
      text: 'text-gray-800',
      border: 'border-gray-200',
    },
    search: {
      background: 'bg-gray-100',
      text: 'text-gray-800',
      placeholder: 'text-gray-500',
    },
  },
  dark: {
    dropdown: {
      background: `bg-[${colors.dark.cardBg}]`,
      text: 'text-white',
      border: 'border-gray-700',
    },
    search: {
      background: `bg-[${colors.dark.background}]`,
      text: 'text-white',
      placeholder: 'text-gray-300',
    },
  },
} as const;