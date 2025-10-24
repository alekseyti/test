import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/test/', // должно совпадать с именем репозитория
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})