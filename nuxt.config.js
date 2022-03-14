import { join } from 'path'

const pkg = require('./package')
require('dotenv').config({ path: '.env.' + process.env.NODE_ENV.toLowerCase() })

const tailwindConfig = {
  ...require('./packages/tokens/tailwind.config.js'),
  purge: {
    content: [
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './components/**/*.vue',
      './pages-partials/**/*.vue',
      './node_modules/@ryaposov/**/*.vue',
      './packages/@ryaposov/**/*.vue'
    ],
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Pavel Ryaposov',
    titleTemplate: '%s - Pavel Ryaposov',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
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
    script: [
      process.env.NODE_ENV === 'DEVELOPMENT' ? { src: 'http://localhost:8098' } : {}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'hsla(0, 0%, 90.2%, 1)',
    height: '2px'
  },

  /*
  ** Global CSS
  */
  css: [
    './node_modules/@ryaposov/tokens/css/custom-media.css',
    './assets/css/fonts.css',
    './assets/css/root-size.css',
    './node_modules/@ryaposov/tokens/css/custom-variables.css',
    './node_modules/@ryaposov/tokens/css/colors.css',
    './assets/css/br.css',
    './assets/css/base.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    ...process.env.NODE_ENV !== 'development' ? [{ src: '~/plugins/analytics.js', mode: 'client' }] : [],
    { src: '~/plugins/vue-prototype.js' },
    { src: '~/plugins/mobile-detect.js', mode: 'server' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/prismic',
    'nuxt-client-init-module',
    '@nuxt/http',
    '@nuxtjs/proxy',
    // 'nuxt-ssr-cache'
  ],

  tailwindcss: {
    exposeConfig: false,
    config: {
      ...tailwindConfig
    }
  },

  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: process.env.NODE_ENV !== 'development',
    postcss: {
      plugins: process.env.NODE_ENV === 'development' || process.env.ACTION === 'build' ? {
        '~/helpers/purgeCssCommentPlugin.js': {},
        tailwindcss: { ...tailwindConfig },
        'postcss-nested-ancestors': {},
        'postcss-nested': {},
        'postcss-each': {},
        'postcss-pxtorem': {
          rootValue: 16,
          propList: ['*'],
          mediaQuery: true,
          exclude: './assets/css/root-size.css',
        }
      } : {},
      preset: {
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
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    babel: {
      presets: [
        [
          "@babel/preset-env",
          {
            "targets": { "node": "10" },
            "useBuiltIns": false,
            "modules": false,
            "loose": true
          }
        ]
      ],
      plugins: [
        "@babel/syntax-dynamic-import",
        "@babel/transform-runtime",
        "@babel/transform-async-to-generator",
        "babel-plugin-mix-import-module-exports"
      ]
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
  modern: false,
  env: {
    
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
  cache: {
    maxAge: 2592000,
  //   pages: [
  //     // you can also pass a regular expression to test a path
  //     /\/posts\/.+$/,
  //     /\/projects\/.+$/,
  //     /^\/$/
  //   ],
  //   store: {
  //     type: 'memory',
  //     max: 40,
  //     ttl: 1800,
  //   },
  },
  publicRuntimeConfig: {
    PRISMIC_ENDPOINT: process.env.PRISMIC_ENDPOINT,
    MIXPANEL_TOKEN: process.env.MIXPANEL_TOKEN
  },
  privateRuntimeConfig: {},
  env: {}
}
