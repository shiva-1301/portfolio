import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base` must match the GitHub Pages path (https://<user>.github.io/<repo>/).
// Set it to '/' if you move the site to a custom domain, Vercel or Netlify.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
