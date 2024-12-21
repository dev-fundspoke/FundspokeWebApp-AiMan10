export const designSystem = {
  colors: {
    // Primary colors - Holographic blue
    primary: {
      50: '#E6F7FF',
      100: '#BAE7FF',
      200: '#91D5FF',
      300: '#69C0FF',
      400: '#40A9FF',
      500: '#1890FF', // Main brand color
      600: '#096DD9',
      700: '#0050B3',
      800: '#003A8C',
      900: '#002766',
    },
    // Secondary colors - Neon purple
    secondary: {
      50: '#F5F0FF',
      100: '#E8DAFF',
      200: '#D3B4FF',
      300: '#B37EFF',
      400: '#9254DE',
      500: '#722ED1', // Accent color
      600: '#531DAB',
      700: '#391085',
      800: '#27075E',
      900: '#160338',
    },
    // Accent colors - Electric cyan
    accent: {
      50: '#E6FFFB',
      100: '#B5F5EC',
      200: '#87E8DE',
      300: '#5CDBD3',
      400: '#36CFC9',
      500: '#13C2C2', // Highlight color
      600: '#08979C',
      700: '#006D75',
      800: '#00474F',
      900: '#002329',
    },
    // Dark mode specific colors
    dark: {
      bg: '#0A0F1E', // Deep space background
      card: '#141B2D', // Holographic card background
      hover: '#1C2333', // Interactive hover state
      border: '#252D3D', // Subtle borders
    },
    // Neutral colors with a tech feel
    neutral: {
      50: '#F0F2F5',
      100: '#E4E6E9',
      200: '#D1D5DB',
      300: '#9AA2B1',
      400: '#6B7280',
      500: '#4B5563',
      600: '#374151',
      700: '#1F2937',
      800: '#111827',
      900: '#0A0F1E',
    },
  },
  effects: {
    glow: {
      primary: '0 0 20px rgba(24, 144, 255, 0.15)',
      secondary: '0 0 20px rgba(114, 46, 209, 0.15)',
      accent: '0 0 20px rgba(19, 194, 194, 0.15)',
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdrop: 'blur(8px)',
    },
  },
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
      display: 'Plus Jakarta Sans, sans-serif',
      mono: 'JetBrains Mono, monospace', // For code and technical data
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1), 0 0 10px rgba(24, 144, 255, 0.1)',
    DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.1), 0 0 15px rgba(24, 144, 255, 0.15)',
    md: '0 6px 8px rgba(0, 0, 0, 0.1), 0 0 20px rgba(24, 144, 255, 0.2)',
    lg: '0 8px 12px rgba(0, 0, 0, 0.1), 0 0 25px rgba(24, 144, 255, 0.25)',
    glow: '0 0 20px rgba(24, 144, 255, 0.2)',
  },
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    DEFAULT: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  animation: {
    transition: {
      fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
      DEFAULT: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
      slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
} as const;