export const holographicStyles = {
  card: {
    base: `
      relative
      overflow-hidden
      backdrop-filter
      backdrop-blur-xl
      transition-all
      duration-300
      border
      border-opacity-20
      hover:border-opacity-30
      rounded-xl
    `,
    dark: {
      background: 'rgba(20, 29, 46, 0.7)',
      border: 'rgba(44, 198, 114, 0.2)',
      shadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    },
    light: {
      background: 'rgba(255, 255, 255, 0.7)',
      border: 'rgba(74, 114, 255, 0.2)',
      shadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
  },
  text: {
    glow: {
      primary: '0 0 10px rgba(44, 198, 114, 0.5)',
      secondary: '0 0 10px rgba(74, 114, 255, 0.5)',
      tertiary: '0 0 10px rgba(255, 61, 113, 0.5)',
    },
  },
};