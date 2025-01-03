export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js', defer: true }
      ], link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap',
        },
      ],
    }
  },
  css: [
    '@/assets/scss/main.scss', // SCSS dosyanızın yolu
  ],
  modules: ['@nuxtjs/i18n'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'tr', iso: 'tr-TR', file: 'tr.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'i18n/locales/',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true
    }
  },

  compatibilityDate: '2024-12-27'
})