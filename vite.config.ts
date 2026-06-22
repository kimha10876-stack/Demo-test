import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    fs: {
      allow: [
        process.cwd(),
        path.resolve(process.cwd(), '../resources'),
        '/Users/nhipham/.cursor/projects/Users-nhipham-Desktop-waterloo-website-biofilter-website/assets',
      ],
    },
  },
})
