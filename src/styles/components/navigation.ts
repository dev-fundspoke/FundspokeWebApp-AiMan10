export const navigationStyles = {
  card: {
    container: `
      relative
      p-6
      rounded-xl
      transition-all
      duration-300
      hover:transform
      hover:scale-105
    `,
    icon: `
      text-4xl
      mb-4
      transition-all
      duration-300
      group-hover:transform
      group-hover:scale-110
    `,
    title: `
      text-xl
      font-semibold
      mb-2
      transition-colors
      duration-300
    `,
    description: `
      mb-6
      transition-colors
      duration-300
      group-hover:text-neutral-300
    `,
  },
  effects: {
    dark: {
      glow: {
        primary: '0 0 20px rgba(0, 240, 255, 0.2)',
        hover: '0 0 30px rgba(0, 240, 255, 0.3)',
      },
      border: {
        default: '1px solid rgba(0, 240, 255, 0.1)',
        hover: '1px solid rgba(0, 240, 255, 0.2)',
      },
    },
  },
};