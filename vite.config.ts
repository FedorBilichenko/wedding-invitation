import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import preload from "vite-plugin-preload";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), preload()],
  resolve: {
    alias: {
      styles: path.resolve(__dirname, './src/styles'),
      utils: path.resolve(__dirname, './src/utils'),
    }
  }
})
