import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'], 
  server: {
  host: true,
  strictPort: true,
  cors: true,
  // Disable host checking by allowing all hosts
  allowedHosts: "all"
},
});
