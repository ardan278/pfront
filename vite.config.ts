import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Remove the problematic tailwindcss import
// import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@tailwindcss/oxide', 'lightningcss'],
  },
  server: {
    host: true, // Enable host for network accessibility
  }
});