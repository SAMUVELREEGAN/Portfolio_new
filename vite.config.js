import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'], 
  server: {
    host: true,
    allowedHosts: [
      '.ngrok-free.app', 
      'localhost',
      '127.0.0.1',
      'portfolio-new-cf1e.onrender.com',  // <--- add this line
    ],
  },
});
