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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    './assets/css/typography.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
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
    }
  }
}
