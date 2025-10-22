import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Явно указываем название репозитория для GitHub Pages
const repositoryName = 'ai'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${repositoryName}/` : '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
