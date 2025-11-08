import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { terser } from 'rollup-plugin-terser'

export default defineConfig({
  plugins: [
    react(),
    terser({
      compress: {
        drop_console: true,
        dead_code: true
      },
      mangle: {
        toplevel: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false
      }
    })
  ],
  build: {
    minify: 'terser',
    sourcemap: false
  }
})