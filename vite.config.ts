import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import svgr from 'vite-plugin-svgr';
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    svgr({
      // svgr options
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // now @ points to /src
    },
  },
});
