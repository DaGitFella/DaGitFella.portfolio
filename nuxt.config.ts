import tailwindcss from "@tailwindcss/vite";
import { p } from "vue-router/dist/router-CWoNjPRp.mjs";

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
    '@nuxtjs/color-mode',
    'vue3-carousel-nuxt',
    '@nuxtjs/device',
    ['nuxt-mail', {
      message: {
        to: 'davibezerra123457@gmail.com',
      },
      smtp: {
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
    }]
  ],
  fonts: {
    defaults: {
      weights: [400, 500, 700],
    },
  }
})