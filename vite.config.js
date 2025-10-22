import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Получаем название репозитория из переменной окружения или используем 'ai' по умолчанию
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'ai'

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
