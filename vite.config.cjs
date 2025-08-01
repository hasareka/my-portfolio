import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Remove or comment out the following if it exists:
  // base: '/my-portfolio/',
});
