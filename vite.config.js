import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/reactthreejs01',
  build: {
    rollupOptions: {
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env': process.env,
  },
  server: {
    port: 3000,
  },
  assetsInclude: ['**/*.glb'], // add this line
})