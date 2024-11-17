import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Use Node.js path module for resolving aliases

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      lodash: path.resolve(__dirname, 'node_modules/lodash'),
    },
  },
  plugins: [react()],
  server: {
    port: 3007, // Change this to your desired port number
  },
});
