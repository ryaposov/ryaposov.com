<template>
  <AppStack
    :tag="tag"
    :class="rootClasses"
    :data-name="$NAME"
    v-bind="rootProps"
    direction="row"
    align="center"
    class="app-cursor-pointer app-select-none"
  >
    <AppText
      :text="text"
      :color="color"
      :size="size"
      :weight="weight"
    />
  </AppStack>
</template>

<script>
import AppStack from './AppStack.vue'
import AppText from './AppText.vue'

import arrayPropValidator from '~/helpers/arrayPropValidator.js'

const allowedTypes = ['text', 'framed', 'underlined', 'bordered']
const allowedSizes = ['20', '18', '16', '14']
  .reduce((a, b) => a.concat([b, parseInt(b)]), [])
const allowedWeights = ['semibold', 'medium', 'regular']
const allowedColors = ['1', '2', '3', '4']
  .reduce((a, b) => a.concat([b, parseInt(b)]), []).concat(['brand'])
const allowedBg = ['1', '2', '3']
  .reduce((a, b) => a.concat([b, parseInt(b)]), []).concat(['brand'])
const allowedRounded = ['4', '8', '16', '32']
  .reduce((a, b) => a.concat([b, parseInt(b)]), []).concat(['full'])

export default {
  name: 'AppButton',
  components: {
    AppStack,
    AppText
  },
  props: {
    tag: {
      type: String,
      default: 'a'
    },
    text: {
      type: String,
      default: ''
    },
    weight: {
      type: String,
      default: 'medium',
      validator: val => allowedWeights.includes(val)
    },
    size: {
      type: [String, Number, Array],
      required: true,
      validator: arrayPropValidator(allowedSizes)
    },
    color: {
      type: [String, Number, Array],
      default: '1',
      validator: arrayPropValidator(allowedColors)
    },
    bg: {
      type: [String, Number, Array],
      default: '1',
      validator: arrayPropValidator(allowedBg)
    },
    type: {
      type: String,
      default: 'text',
      validator: val => allowedTypes.includes(val)
    },
    rounded: {
      type: [String, Number],
      default: 'text',
      validator: val => allowedRounded.includes(val)
    },
    href: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    rootClasses () {
      return [
        ...{
          1: ['app-text-1'],
          2: ['app-text-2'],
          3: ['app-text-3'],
          brand: ['app-text-brand']
        }[this.responsiveProp('bg')],
        ...{
          text: [],
          undelined: [],
          framed: ['app-px-16', 'app-py-4', 'md:app-py-8', 'md:app-px-28'],
          bordered: []
        }[this.type],
        ...{
          4: ['app-rounded-4'],
          8: ['app-rounded-8'],
          16: ['app-rounded-16'],
          32: ['app-rounded-32'],
          full: ['app-rounded-full']
        }[this.rounded],
        ...{
          framed: {
            1: ['app-bg-1'],
            2: ['app-bg-2'],
            3: ['app-bg-3'],
            brand: ['app-bg-brand']
          }
        }[this.type][this.bg],
      ]
    },
    rootProps () {
      const { to, href } = this

      return {
        ...href ? { href } : {},
        ...to.name ? { to } : {}
      }
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