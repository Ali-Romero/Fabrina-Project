const BASE_URL = process.env.DEPLOY_ENV === 'gh-pages'
  ? '/Fabrina/'
  : '/'

const BREAKPOINTS = {
  xxs: 320,
  xs: 576,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1300,
  xxl: 1400,
  xxxl: 1500,
  xxxxxl: 1700,
  xxxxxxxl: 1920,
}

const HEADER_HEIGHT = 66

export default {
  target: 'static',

  router: {
    base: BASE_URL,
  },

  axios: {
    baseURL: BASE_URL,
  },

  generate: {
    fallback: true,
  },

  static: {
    prefix: false,
  },

  head: {
    title: 'Оптовое швейное производство',
    meta: [
      { charset: 'utf-8' },
      { lang: 'ru' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Оптовое швейное производство',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'keywords',
        content:
          ' Швейный цех, швейное производство, производство одежды, поставщики одежды оптом, шитьё для начинающих, пошив оптом, фабрика моды, пошив брендов, заказать пошив, одежда на заказ, футболка на заказ, пошив одежды на заказ, шьём для наших, пошив, швейный цех пошив',
      },
      {
        name: 'description',
        content: 'Оптовое швейное производство',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },

  loading: {
    color: '#0080ff',
    height: '5px',
  },

  publicRuntimeConfig: {
    headerHeight: HEADER_HEIGHT,
  },

  env: {
    breakpoints: BREAKPOINTS,
    headerHeight: HEADER_HEIGHT,
  },

  styleResources: {
    sass: ['@/assets/styles/variables.sass', '@/assets/styles/mixins.sass'],
  },

  css: [
    '@/assets/styles/reset.sass',
    '@/assets/styles/fonts.sass',
    '@/assets/styles/helpers.sass',
    '@/assets/styles/app.sass',
  ],

  plugins: [
    '@/plugins/validation.js',
    '@/plugins/feedback.js',
    '@/plugins/youtube.js',
    { src: '@/plugins/gsap/index.js', mode: 'client' },
    { src: '@/plugins/ymaps.js', mode: 'client' },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@aceforth/nuxt-optimized-images',
  ],

  modules: ['@nuxtjs/axios'],

  optimizedImages: {
    webp: {
      preset: 'default',
      quality: 86,
    },
  },

  axios: {
    baseURL: BASE_URL,
  },

  build: {
    transpile: [
      'vee-validate/dist/rules',
      'swiper',
      'dom7',
      'ssr-window',
      'gsap',
    ],
  },

  server: {
    host: '0.0.0.0',
  },

  static: {
    prefix: false,
  },

  router: {
    base: BASE_URL,
  },
}
