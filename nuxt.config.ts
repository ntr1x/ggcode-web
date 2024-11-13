import Aura from "@primevue/themes/aura"

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/device',
    '@nuxt/image',
    '@primevue/nuxt-module',
    'nuxt-svgo',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  primevue: {
    options: {
      theme: 'none',
    }
  },
  image: {},
  pinia: {
    storesDirs: ['./stores/**'],
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    exposeConfig: true
  },
  routeRules: {
    '/': { swr: true },
    '/login': { swr: true },
    '/private/**': { ssr: false },
  },
  robots: {
    groups: [
      {
        disallow: ['/private', '/login'],
        allow: ['/'],
      },
    ]
  },
  site: {
    name: 'Develfish Studio',
    url: process.env.NUXT_SITE_CONFIG,
  }
})
