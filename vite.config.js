import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Config_Assignment_3/',  // Add the base path for your GitHub Pages repo
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,  // Optional: to suppress the chunk size warning
  }
})
