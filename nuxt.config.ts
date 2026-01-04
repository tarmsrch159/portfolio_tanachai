// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  vite: {
    plugins: [
      tailwindcss(),

    ],
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],
  colorMode: {
    classSuffix: ''
  },

  css: ['./app/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  i18n: {
    defaultLocale: 'th',
    strategy: 'no_prefix', // ไม่ใส่ /en /th ใน URL
    locales: [
      {
        code: 'th',
        name: 'ไทย',
        file: 'th.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      }
    ],
    langDir: 'locales/',
  } as any
})
