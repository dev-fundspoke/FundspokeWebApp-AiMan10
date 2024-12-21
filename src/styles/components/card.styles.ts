export const cardStyles = {
  base: `
    relative
    rounded-xl
    transition-all
    duration-300
    overflow-hidden
  `,
  dark: {
    background: 'rgba(20, 27, 45, 0.7)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    hover: {
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
    },
  },
  light: {
    background: '#FFFFFF',
    border: '1px solid #E1E4E8',
    hover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
  },
};