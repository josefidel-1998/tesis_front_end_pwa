import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    registerType: 'autoUpdate', 
    injectRegister: 'auto',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,vue}']
    },
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
          name:"Biufort",
          short_name:"Biufort",
          display:"standalone",
          background_color:"#FFFFFF",
          lang:"es",
          scope:"/",
          description:"Pwa Biufort",
          theme_color:"#ff4d01",
          icons: [
           {
            src: "/icons/android-icon-36x36.png",
            sizes: "36x36",
            type: "image\/png",
            density: "0.75"
           },
           {
            src: "/icons/android-icon-48x48.png",
            sizes: "48x48",
            type: "image\/png",
            density: "1.0"
           },
           {
            src: "/icons/android-icon-72x72.png",
            sizes: "72x72",
            type: "image\/png",
            density: "1.5"
           },
           {
            src: "/icons/android-icon-96x96.png",
            sizes: "96x96",
            type: "image\/png",
            density: "2.0"
           },
           {
            src: "/icons/android-icon-192x192.png",
            sizes: "192x192",
            type: "image\/png",
            density: "4.0"
           }
        ]
  }})]
})
