import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Set the base URL if necessary
    // base: '/your-app-name/',
    base: '/Zero_one/',
  }
})
