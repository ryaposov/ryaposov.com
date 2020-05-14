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
const allowedTags = ['span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'NuxtLink']
const allowedWeights = ['bold', 'semibold']
const allowedSizes = ['36', '32', '28', '24', '20', '18', '16']
  .reduce((a, b) => a.concat([b, parseInt(b)]), [])
const allowedColors = ['1', '2', '3', '4']
  .reduce((a, b) => a.concat([b, parseInt(b)]), []).concat(['brand'])

export default {
  name: 'AppHeading',
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
      default: 'block',
      validator: val => ['block', 'inline'].includes(val)
    },
    weight: {
      type: String,
      default: 'bold',
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
          bold: ['app-font-bold'],
          semibold: ['app-font-semibold']
        }[this.weight],
        ...{
          36: ['app-text-36', 'app-leading-56'],
          32: ['app-text-32', 'app-leading-52'],
          28: ['app-text-28', 'app-leading-40'],
          24: ['app-text-24', 'app-leading-36'],
          20: ['app-text-20', 'app-leading-32'],
          18: ['app-text-18', 'app-leading-28'],
          16: ['app-text-16', 'app-leading-24']
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