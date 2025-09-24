// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-09-23',
  devtools: { enabled: true },
  app: {
    baseURL: '/',
  },
  css: [
    '@/assets/tailwind.css',
  ],
  nitro: {
    preset: 'github-pages',
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss'
  ]
})
