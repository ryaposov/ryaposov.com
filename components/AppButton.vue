<template>
  <AppStack
    :tag="tag"
    :class="rootClasses"
    :data-name="$NAME"
    v-bind="rootProps"
    direction="row"
    align="center"
    class="app-cursor-pointer app-select-none app-group
      app-transition app-transition-opacity app-duration-100"
  >
    <component
      :is="textTag"
      :color="color"
      :size="size"
      :weight="weight"
      class="app-relative"
    >
      <span v-text="text" />
      <AppBorder
        v-if="type === 'underlined'"
        class="app-absolute app--bottom-4 app-left-0 app-w-full group-hover:app-opacity-0"
      />
    </component>
  </AppStack>
</template>

<script>
import AppStack from './AppStack.vue'
import AppText from './AppText.vue'
import AppHeading from './AppHeading.vue'
import AppBorder from './AppBorder.vue'

import arrayPropValidator from '~/helpers/arrayPropValidator.js'
import arrayIntToStrings from '~/helpers/arrayIntToStrings.js'

const allowedTypes = ['text', 'framed', 'underlined', 'bordered']
const allowedWeights = ['extrabold', 'bold', 'semibold', 'medium', 'regular']
const allowedSizes = arrayIntToStrings(48, 36, 32, 24, 28, 20, 18, 16, 14)
const allowedColors = arrayIntToStrings(1, 2, 3, 4, 'brand')
const allowedBg = arrayIntToStrings(1, 2, 3, 'brand')
const allowedRounded = arrayIntToStrings(0, 4, 8, 16, 24, 32, 40, 48, 56, 'full')

export default {
  name: 'AppButton',
  components: {
    AppStack,
    AppText,
    AppHeading,
    AppBorder
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
      default: 1,
      validator: arrayPropValidator(allowedColors)
    },
    bg: {
      type: [String, Number, Array],
      default: 1,
      validator: arrayPropValidator(allowedBg)
    },
    type: {
      type: [String, Number, Array],
      default: 'text',
      validator: val => allowedTypes.includes(val)
    },
    rounded: {
      type: [String, Number, Array],
      default: 0,
      validator: val => allowedRounded.includes(val)
    },
    href: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default: () => ({})
    },
    textTag: {
      type: String,
      default: 'AppText'
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
          framed: ['app-px-16', 'app-py-4', 'md:app-py-8', 'md:app-px-28', 'hover:app-opacity-75'],
          underlined: [],
          bordered: []
        }[this.responsiveProp('type')],
        ...{
          0: [],
          4: ['app-rounded-4'],
          8: ['app-rounded-8'],
          16: ['app-rounded-16'],
          32: ['app-rounded-32'],
          full: ['app-rounded-full']
        }[this.responsiveProp('rounded')],
        ...{
          framed: {
            1: ['app-bg-1'],
            2: ['app-bg-2'],
            3: ['app-bg-3'],
            brand: ['app-bg-brand']
          },
          text: {
            1: [],
            2: [],
            3: [],
            brand: []
          },
          underlined: {
            1: [],
            2: [],
            3: [],
            brand: []
          },
          bordered: {
            1: [],
            2: [],
            3: [],
            brand: []
          },
        }[this.responsiveProp('type')][this.bg],
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