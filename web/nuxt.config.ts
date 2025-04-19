// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/fonts'],
  alias: {
    '@config': fileURLToPath(new URL('../config', import.meta.url))
  },
  css: ['@/assets/scss/global.css'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    config: {
      theme: {
        extend: {
          backgroundColor: {
            primary: "var(--primary-background)",
          },
        }
      }
    }
    // and more...
  }
})
