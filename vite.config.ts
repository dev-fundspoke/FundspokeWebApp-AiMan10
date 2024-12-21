import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      include: /\.(tsx|ts|jsx|js)$/,
    }),
  ],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    loader: 'tsx',
    include: /src\/.*\.[tj]sx?$/,
  },
});