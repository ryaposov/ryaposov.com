<template>
  <picture
    :style="sizeStyles"
    :data-name="$NAME"
    class="app-flex app-justify-center app-overflow-hidden"
  >
    <source
      v-for="source in sources"
      :key="source.key"
      v-bind="source"
    >
    <img
      v-bind="imgProps"
      :style="sizeStyles"
      loading="lazy"
      class="app-block app-select-none"
    >
  </picture>
</template>

<script>
const config = {
  id: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  preview: {
    type: String,
    default: ''
  },
  formats: {
    type: Array,
    default: () => ['webp', 'jpg']
  },
  quality: {
    type: String,
    default: ''
  },
  progressive: {
    type: Boolean,
    default: true
  },
  size: {
    type: Array,
    default: () => [0, 0]
  },
  resolutions: {
    type: Array,
    default: () => [1, 2]
  }
}

export default {
  name: 'AppImage',
  props: {
    ...config,
    lazy: {
      type: Boolean,
      default: false
    },
    mobile: {
      type: [Object, Boolean],
      default: false
    },
    desktop: {
      type: [Object, Boolean],
      default: false
    },
  },
  data: () => ({
    endpoint: 'https://res.cloudinary.com/druu0syio/image/upload/',
    path: 'v1589449034/ryaposov.com/',
    media: '(max-width: 768px)'
  }),
  computed: {
    sizeStyles () {
      let size = this.size
      
      if (this.$MD) {
        size = this.mapConfig(this.mobile).size
      } else {
        size = this.mapConfig(this.desktop).size
      }

      return {
        width: size[0] + 'px',
        height: size[1] + 'px'
      }
    },
    imgProps () {
      return {
        [this.lazy ? 'data-src' : 'src']: this.composeSrc({ ...this.mapConfig(this), format: 'jpg' }),
        alt: this.alt,
        class: this.lazy ? 'lazyload' : ''
      }
    },
    sources () {
      const sources = []

      if (this.mobile) {
        const payload = this.mapConfig(this.mobile)

        sources.push(
          ...payload.formats.map(format => ({
            [this.lazy ? 'data-srcset' : 'srcset']: this.composeSrcSet({ ...payload, format }),
            media: this.media,
            type: 'image/' + format,
            key: 'mobile' + '-' + format
          }))
        )
      }

      if (this.desktop) {
        const payload = this.mapConfig(this.desktop)

        sources.push(
          ...payload.formats.map(format => ({
            [this.lazy ? 'data-srcset' : 'srcset']: this.composeSrcSet({ ...payload, format }),
            media: this.media,
            type: 'image/' + format,
            key: 'desktop' + '-' + format
          }))
        )
      }

      if (!this.mobile && !this.desktop) {
        const payload = this.mapConfig(this)

        sources.push(
          ...payload.formats.map(format => ({
            [this.lazy ? 'data-srcset' : 'srcset']: this.composeSrcSet({ ...payload, format }),
            type: 'image/' + format
          }))
        )
      }

      return sources
    }
  },
  methods: {
    mapConfig (payload) {
      return Object.keys(config).reduce((a, b) => {
        a[b] = payload[b] === undefined ? this[b] : payload[b]
        return a
      }, {})
    },
    composeSrc (payload) {
      const attrs = {}
      const path = this.path
      const id = payload.id || this.id
      const alt = payload.alt
      const srcset = this.endpoint + this.composeParams({ ...payload, resolution: 1 }) + path + id

      return srcset
    },
    composeSrcSet (payload) {
      const attrs = {}
      const path = this.path
      const id = payload.id || this.id
      const resolutions = payload.resolutions || this.resolutions
      const alt = payload.alt
      const srcset = resolutions
        .map(resolution => 
          this.endpoint + this.composeParams({ ...payload, resolution }) +
          path + id + ` ${resolution}x`
        )
        .join(', ')

      return srcset
    },
    composeParams (payload) {
      const params = []

      if (payload.size) {
        params.push(`w_${payload.size[0]},h_${payload.size[1]}`)
      } else if (payload.preview) {
        params.push(`w_${payload.preview},h_${payload.preview}`)
      }

      if (payload.resolution) {
        params.push(`dpr_${payload.resolution + '.0'}`)
      }

      if (payload.format) {
        params.push(`f_${payload.format}`)
      }

      if (payload.quality) {
        params.push(`q_${payload.quality}`)
      }

      if (payload.progressive) {
        params.push('fl_progressive')
      }

      return params.map(item => '' + item + '/').join('')
    }
  }
}
</script>