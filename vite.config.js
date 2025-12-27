// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/joshuafarrell/', 
  build: {
    outDir: 'docs', 
    emptyOutDir: true, 
  },
})