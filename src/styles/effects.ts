export const effects = {
  glow: {
    primary: {
      low: '0 0 10px',
      medium: '0 0 20px',
      high: '0 0 30px',
    },
    colors: {
      primary: 'rgba(24, 144, 255, 0.2)',
      secondary: 'rgba(114, 46, 209, 0.2)',
      accent: 'rgba(19, 194, 194, 0.2)',
    },
  },
  glass: {
    dark: {
      background: 'rgba(20, 27, 45, 0.7)',
      border: 'rgba(255, 255, 255, 0.1)',
    },
    light: {
      background: 'rgba(255, 255, 255, 0.7)',
      border: 'rgba(0, 0, 0, 0.1)',
    },
    blur: 'blur(8px)',
  },
  gradients: {
    dark: {
      primary: 'linear-gradient(180deg, rgba(10, 15, 30, 0.8) 0%, rgba(20, 27, 45, 0.8) 100%)',
      secondary: 'linear-gradient(45deg, rgba(114, 46, 209, 0.1), rgba(19, 194, 194, 0.1))',
    },
    light: {
      primary: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(240, 242, 245, 0.8) 100%)',
      secondary: 'linear-gradient(45deg, rgba(24, 144, 255, 0.1), rgba(114, 46, 209, 0.1))',
    },
  },
} as const;