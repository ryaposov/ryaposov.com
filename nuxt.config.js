import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pavel Ryaposov',
    titleTemplate: '%s - Pavel Ryaposov',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // Favicons
      { rel: 'icon', href: '/favicons/favicon.svg', type: 'image/svg+xml' },
      { rel: 'icon',  sizes: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon',  sizes: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'mask-icon',  href: '/favicons/safari-pinned-tab.svg', color: '#000000' },
      { rel: 'apple-touch-icon',  sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'shortcut icon',  href: '/favicons/favicon.ico' }
    ]
  },

  loading: {
    color: 'hsla(0, 0%, 90.2%, 1)',
    height: '2px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './node_modules/@ryaposov/tokens/css/custom-media.css',
    './node_modules/@ryaposov/tokens/css/custom-variables.css',
    './node_modules/@ryaposov/tokens/css/colors.css',
    './assets/css/tailwind.css',
    './assets/css/fonts.css',
    './assets/css/root-size.css',
    './assets/css/br.css',
    './assets/css/base.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-prototype.js' },
    { src: '~/plugins/mobile-detect.js', mode: 'server' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/ackee'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/prismic',
    'nuxt-client-init-module',
    '@nuxtjs/proxy',
    '@nuxtjs/sentry'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-nested-ancestors': {},
        'tailwindcss/nesting': 'postcss-nested',
        tailwindcss: {
          config: {
            ...require('./node_modules/@ryaposov/tokens/tailwind.config.js'),
            content: [
              './pages/**/*.{vue,js}',
              './pages-partials/**/*.{vue,js}',
              './components/**/*.{vue,js}',
              '../packages/**/*.{vue,js}'
            ]
          }
        },
        'postcss-each': {},
        'postcss-preset-env': {
          stage: false,
          features: {
            'custom-media-queries': true,
            'custom-properties': true
          },
          importFrom: [
            './assets/css/root-size.css',
            './node_modules/@ryaposov/tokens/css/custom-variables.css',
            './node_modules/@ryaposov/tokens/css/custom-media.css'
          ]
        },
        'postcss-pxtorem': {
          rootValue: 16,
          propList: ['*'],
          mediaQuery: true,
          exclude: './assets/css/root-size.css',
        }
      }
    }
  },

  http: {
    proxy: true
  },
  proxy: {
    '/api/': {
      target: process.env.NODE_ENV === 'development' ? 'http://localhost:3003' : 'https://ryaposov-api.ey.r.appspot.com',
      pathRewrite: {'^/api/': ''}
    }
  },

  sentry: {
    dsn: process.env.SENTRY_DSN,
    disabled: process.env.NODE_ENV !== 'production',
    config: {},
    clientIntegrations: {
      Dedupe: {},
      ExtraErrorData: {},
      ReportingObserver: {},
      RewriteFrames: {},
      Breadcrumbs: {},
      CaptureConsole: {},
      Vue: { attachProps: true, logErrors: process.env.NODE_ENV !== 'production' }
    },
    tracing: true
  },

  ackee: {
    server: process.env.ACKEE_SERVER,
    domainId: process.env.ACKEE_DOMAIN_ID,
    detailed: true
  },

  prismic: {
    preview: process.env.NODE_ENV === 'development',
    endpoint: process.env.PRISMIC_ENDPOINT,
    linkResolver: '~/plugins/link-resolver',
    htmlSerializer: '~/plugins/html-serializer',
    components: false,
    apiOptions: {
      timeoutInMs: 5000
    }
  },

  publicRuntimeConfig: {
    PRISMIC_ENDPOINT: process.env.PRISMIC_ENDPOINT
  },
  privateRuntimeConfig: {},
  env: {}
})
