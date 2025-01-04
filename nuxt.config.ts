const devServer = { https: true }
import { config } from './src/config.app'
import { head } from './src/head.app'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
    '@nuxtjs/color-mode',
  ],
  tailwindcss: {
    cssPath: ['@/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: '@/tailwind.config.ts',
    viewer: false,
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
    dataValue: 'theme',
    storageKey: 'theme',
    storage: 'cookie',
  },

  app: {
    head: { ...head },
  },

  runtimeConfig: { ...config },

  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm',
    },
  },
  icon: {
    collections: ['bx'],
    mode: 'svg',
    customCollections: [{ prefix: 'unqr', dir: './assets/icons' }],
  },
  devServer,
})
