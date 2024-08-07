import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@types': '/src/types',
      '@services': '/src/services',
      '@styles': '/src/styles',
      '@consts': '/src/consts',
      '@hooks': '/src/hooks',
    },
  },
  plugins: [react()],
});
