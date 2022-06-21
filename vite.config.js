import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir : path.join(__dirname, "static"),
  build : {
      outDir : path.join(__dirname, "dist"),
      emptyOutDir: true,
  }
})
