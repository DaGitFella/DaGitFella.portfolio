import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'slide', mode: 'out-in' },
  },
  css: [
    '@/assets/css/main.css',
  ],

  vite: {
    plugins: [
      tailwindcss() as any,
    ]
  },
  modules: [
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode'
  ],
  fonts: {
    defaults: {
      weights: [400, 500, 700],
    },
  }
})