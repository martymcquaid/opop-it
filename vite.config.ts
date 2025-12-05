import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/3d5daac7-7094-4a04-8d16-4c6316f724b6/preview',
  plugins: [react()],
  css: {
    // Ensure CSS is processed and injected correctly
    devSourcemap: true,
  },
  server: {
    port: 5235,
    host: true,
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5235,
    },
  },
})
