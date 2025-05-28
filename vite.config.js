import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'], 
server: {
  host: true,
  allowedHosts: [
    '.ngrok-free.app', // wildcard allow ngrok domains
    'localhost',
    '127.0.0.1',
  ],
}

});
