import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@Shared': path.resolve(__dirname, 'src/Shared'),
      '@Components': path.resolve(__dirname, 'src/Components'),
      '@Pages': path.resolve(__dirname, 'src/Pages'),
      '@Layout': path.resolve(__dirname, 'src/Layout'),
    },
  },
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
  },
});
