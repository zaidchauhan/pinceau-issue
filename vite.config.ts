import { defineConfig } from 'vite'
import Pinceau from 'pinceau/vite'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  logLevel: 'info',
  plugins: [
    // https://pinceau.dev
    Pinceau({
      debug: true,
    }),
    // https://vuejs.org
    Vue(),
  ],
})
