import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pnl/',
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'Futures PnL',
        short_name: 'PnL',
        description: 'Futures PnL Calculator',
        start_url: '/pnl/',
        scope: '/pnl/',
        lang: 'en',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: 'pwa_x48.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: 'pwa_x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'pwa_x96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: 'pwa_x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'pwa_x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa_x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'pwa_x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa_x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      registerType: 'autoUpdate'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
