import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      _components: '/src/components',
      _utils: '/src/utils',
      _types: '/src/types',
      _services: '/src/services',
      _styles: '/src/styles',
      _consts: '/src/consts',
      _hooks: '/src/hooks',
    },
  },
  plugins: [react()],
});
