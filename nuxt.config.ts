export default {
  head: {
    title: 'qiita-api-site',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/scss/default.scss'],

  styleResources: {
    scss: ['@/assets/scss/default.scss'],
  },

  plugins: [],

  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],

  buildModules: [
    '@nuxtjs/composition-api',
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],

  axios: {},

  build: {},
}