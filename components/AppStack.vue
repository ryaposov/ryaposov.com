<template>
  <component
    :is="tag"
    :class="rootClasses"
    :data-name="$NAME"
    class="app-flex"
  >
    <slot />
  </component>
</template>

<script>
import arrayPropValidator from '~/helpers/arrayPropValidator.js'

export default {
  name: 'AppStack',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    direction: {
      type: [String, Array],
      default: 'row',
      validator: val => arrayPropValidator(['row', 'col'])
    },
    align: {
      type: [String, Array],
      default: 'stretch',
      validator: val => arrayPropValidator(['start', 'end', 'center', 'stretch'])
    },
    content: {
      type: [String, Array],
      default: 'start',
      validator: val => arrayPropValidator(['start', 'end', 'center', 'between', 'around', 'stretch'])
    },
    wrap: {
      type: [String, Array],
      default: 'nowrap',
      validator: val => arrayPropValidator(['nowrap', 'wrap', 'wrap-reverse'])
    },
    justify: {
      type: [String, Array],
      default: 'start',
      validator: val => arrayPropValidator(['start', 'end', 'center', 'between', 'around', 'stretch'])
    }
  },
  computed: {
    rootClasses () {
      return [
        ...{
          row: ['app-flex-row'],
          col: ['app-flex-col']
        }[this.$RESPONSIVE_PROP('direction')],
        ...{
          start: ['app-items-start'],
          end: ['app-items-end'],
          center: ['app-items-center'],
          stretch: ['app-items-stretch']
        }[this.$RESPONSIVE_PROP('align')],
        ...{
          start: ['app-justify-start'],
          end: ['app-justify-end'],
          center: ['app-justify-center'],
          between: ['app-justify-between'],
          around: ['app-justify-around'],
          stretch: []
        }[this.$RESPONSIVE_PROP('content')],
        ...{
          nowrap: ['app-flex-no-wrap'],
          wrap: ['app-flex-wrap'],
          'wrap-reverse': ['app-flex-wrap-reverse']
        }[this.$RESPONSIVE_PROP('wrap')],
        ...{
          start: ['app-justify-start'],
          end: ['app-justify-end'],
          center: ['app-justify-center'],
          between: ['app-justify-between'],
          around: ['app-justify-around'],
          stretch: []
        }[this.$RESPONSIVE_PROP('justify')],
      ]
    }
  }
}
</script>
