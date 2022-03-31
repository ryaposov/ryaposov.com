import { defineNuxtConfig } from '@nuxt/bridge'

require('dotenv').config({ path: '.env.' + process.env.NODE_ENV.toLowerCase() })

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
    ],
    // To not sanitize the color scheme detection script
    __dangerouslyDisableSanitizersByTagID: {
      'prefers-color-scheme': ['innerHTML']
    },
    // Needs to be on the top of other scripts, to avoid screen flashing
    script: [
      {
        hid: 'prefers-color-scheme',
        innerHTML: `(function () {
          const matchCondition = window.matchMedia('(prefers-color-scheme: dark)')

          if (matchCondition.matches) {
            document.getElementsByTagName('html')[0].classList.add('app-dark')
          }

          if (matchCondition.addEventListener) {
            matchCondition.addEventListener('change', e => {
              document.getElementsByTagName('html')[0].classList[e.matches ? 'add' : 'remove']('app-dark')
            })
          }
        })()`,
        type: 'text/javascript',
      }
    ],
  },

  loading: {
    color: 'var(--app-aborder-2)',
    height: '2px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/tailwind.css',
    './node_modules/@ryaposov/tokens/css/custom-media.css',
    './node_modules/@ryaposov/tokens/css/custom-variables.css',
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
    ...process.env.NODE_ENV === 'production' ? ['@nuxtjs/ackee'] : []
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/prismic',
    'nuxt-client-init-module',
    '@nuxtjs/sentry'
  ],

  alias: {
    // Fix for the issue coming from sentry and tslib, described here https://github.com/nuxt/framework/issues/1151
    tslib: 'tslib/tslib.es6.js'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    // Some modules require to be transpiled. Read more here https://v3.nuxtjs.org/concepts/esm/
    transpile: ['dayjs', 'prismic-dom'],
    postcss: {
      plugins: {
        '@ryaposov/tokens/colors/postcss-plugin.js': {
          resolve: uri => require.resolve(uri)
        },
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-nested-ancestors': {},
        'tailwindcss/nesting': 'postcss-nested',
        // Community nuxt/tailwind module didn't work at that time
        tailwindcss: {
          config: {
            ...require('./node_modules/@ryaposov/tokens/tailwind.config.js'),
            darkMode: 'class',
            content: [
              './plugins/html-serializer.js',
              './pages/**/*.{vue,js}',
              './pages-partials/**/*.{vue,js}',
              './components/**/*.{vue,js}',
              './packages/**/*.{vue,js}'
            ]
          }
        },
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

  render: {
    resourceHints: true
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

  ...process.env.NODE_ENV === 'production' ? {
      ackee: {
      server: process.env.ACKEE_SERVER,
      domainId: process.env.ACKEE_DOMAIN_ID,
      detailed: true
    }
  } : {},

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

  env: {}
})
