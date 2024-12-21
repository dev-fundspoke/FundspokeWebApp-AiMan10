/** @type {import('tailwindcss').Config} */
import { designSystem } from './src/styles/design-system'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: designSystem.colors,
      fontFamily: designSystem.typography.fontFamily,
      fontSize: designSystem.typography.fontSize,
      fontWeight: designSystem.typography.fontWeight,
      spacing: designSystem.spacing,
      boxShadow: designSystem.shadows,
      borderRadius: designSystem.borderRadius,
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}