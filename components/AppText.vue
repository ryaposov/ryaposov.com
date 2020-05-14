<template>
  <component
    :is="tag"
    :class="rootClasses"
    :data-name="$NAME"
    v-bind="rootProps"
  >
    <span
      v-if="html"
      class="app-br"
      v-html="html"
    />
    <slot v-else>
      {{ text }}
    </slot>
  </component>
</template>

<script>
const allowedTags = ['span', 'p', 'i', 'strong']
const allowedWeights = ['semibold', 'medium', 'regular']
const allowedSizes = ['20', '18', '16', '14']
  .reduce((a, b) => a.concat([b, parseInt(b)]), [])
const allowedColors = ['1', '2', '3', '4']
  .reduce((a, b) => a.concat([b, parseInt(b)]), []).concat(['brand'])


export default {
  name: 'AppText',
  props: {
    tag: {
      type: String,
      default: 'span',
      validator: val => allowedTags.includes(val)
    },
    html: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    display: {
      type: String,
      default: 'inline',
      validator: val => ['inline', 'block'].includes(val)
    },
    weight: {
      type: String,
      default: 'medium',
      validator: val => allowedWeights.includes(val)
    },
    size: {
      type: [String, Number, Array],
      required: true,
      validator: val => {
        if (Array.isArray(val)) {
          return val.every(item => allowedSizes.includes(item))
        }

        return allowedSizes.includes(val)
      }
    },
    color: {
      type: [String, Number],
      default: '1',
      validator: val => {
        if (Array.isArray(val)) {
          return val.every(item => allowedColors.includes(item))
        }

        return allowedColors.includes(val)
      }
    },
    href: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default: () => ({})
    },
  },
  computed: {
    rootProps () {
      const { to, href } = this

      return {
        ...href ? { href } : {},
        ...to.name ? { to } : {}
      }
    },
    rootClasses () {
      return [
        ...{
          block: ['app-block'],
          inline: ['app-inline']
        }[this.display],
        ...{
          semibold: ['app-font-semibold'],
          medium: ['app-font-medium'],
          regular: ['app-font-regular']
        }[this.weight],
        ...{
          20: ['app-text-20', 'app-leading-32'],
          18: ['app-text-18', 'app-leading-28'],
          16: ['app-text-16', 'app-leading-24'],
          14: ['app-text-14', 'app-leading-20']
        }[this.responsiveProp('size')],
        ...{
          1: ['app-text-1'],
          2: ['app-text-2'],
          3: ['app-text-3'],
          4: ['app-text-4'],
          brand: ['app-text-brand']
        }[this.responsiveProp('color')],
      ]
    }
  },
  methods: {
    responsiveProp (name) {
      if (Array.isArray(this[name])) {
        return this[name][this.$MD ? 1 : 0]
      } else {
        return this[name]
      }
    }
  }
}
</script>