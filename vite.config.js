import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,  // Allows 0.0.0.0 binding (for Render)
    port: process.env.PORT || 5173,  // Dynamic port for Render
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.onrender.com',  // Wildcard for all Render subdomains (secure & future-proof)
    ],
  },
})
