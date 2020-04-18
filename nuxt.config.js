const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;700;900&display=swap' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    './assets/css/variables.css',
    './assets/css/colors.css',
    './assets/css/typography.css',
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
    'nuxt-client-init-module',
    '@nuxt/http',
    '@nuxtjs/proxy'
  ],

  tailwindcss: {
    exposeConfig: true
  },

  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-nested-ancestors': {},
        'postcss-nested': {},
      },
      preset: {
        stage: false,
        features: {
          'custom-media-queries': true,
          'custom-properties': true
        },
        importFrom: [
          './assets/css/variables.css'
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
      target: process.env.NODE_ENV === 'development' ? 'http://localhost:3003' : 'http://localhost:3003',
      pathRewrite: {'^/api/': ''}
    }
  },
  modern: 'server'
}
