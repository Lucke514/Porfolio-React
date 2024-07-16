import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@Shared': path.resolve(__dirname, 'src/Shared'),
      '@Components': path.resolve(__dirname, 'src/Components'),
      '@Interfaces': path.resolve(__dirname, 'src/Interfaces'),
      '@Pages': path.resolve(__dirname, 'src/Pages'),
      '@Layout': path.resolve(__dirname, 'src/Layout'),
      '@Styles': path.resolve(__dirname, 'src/Styles'),
      '@Services': path.resolve(__dirname, 'src/Services'),
    },
  },
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
  },
});
