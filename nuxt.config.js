const pkg = require('./package')
require('dotenv').config({ path: '.env.' + process.env.NODE_ENV.toLowerCase() })

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Pavel Ryposov',
    titleTemplate: '%s - Pavel Ryaposov',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600;700;900&display=swap' },
      // Favicons
      { rel: 'icon', href: '/favicons/favicon.svg', type: 'image/svg+xml' },
      { rel: 'icon',  sizes: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon',  sizes: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'mask-icon',  href: '/favicons/safari-pinned-tab.svg', color: '#000000' },
      { rel: 'apple-touch-icon',  sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      { rel: 'shortcut icon',  href: '/favicons/favicon.ico' }
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
    './assets/css/custom-media.css',
    './assets/css/variables.css',
    './assets/css/colors.css',
    './assets/css/br.css',
    './assets/css/base.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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
    '@nuxtjs/proxy'
  ],

  tailwindcss: {
    exposeConfig: false
  },

  buildModules: [
    ['nuxt-purgecss', {
      paths: [
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './components/**/*.vue',
        './pages-partials/**/*.vue'
      ]
    }],
    ['@nuxtjs/pwa', { icon: false }],
    '@nuxtjs/tailwindcss'
  ],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: process.env.NODE_ENV !== 'development',
    postcss: {
      plugins: process.env.NODE_ENV === 'development' || process.env.ACTION === 'build' ? [
        require('postcss-import')(),
        require('./helpers/purgeCssCommentPlugin.js')(),
        require('postcss-nested-ancestors')({}),
        require('postcss-nested')({}),
        require('postcss-preset-env')({
          stage: false,
          features: {
            'custom-media-queries': true,
            'custom-properties': true
          },
          importFrom: [
            './assets/css/variables.css',
            './assets/css/custom-media.css'
          ]
        })
      ] : []
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
  modern: 'server',
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
  pwa: {
    
  }
}
