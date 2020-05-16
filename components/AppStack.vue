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
export default {
  name: 'AppStack',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    direction: {
      type: String,
      default: 'row',
      validator: val => ['row', 'col'].includes(val)
    },
    align: {
      type: String,
      default: 'stretch',
      validator: val => ['start', 'end', 'center', 'stretch'].includes(val)
    },
    content: {
      type: String,
      default: 'start',
      validator: val => ['start', 'end', 'center', 'between', 'around', 'stretch'].includes(val)
    },
    wrap: {
      type: String,
      default: 'nowrap',
      validator: val => ['nowrap', 'wrap', 'wrap-reverse'].includes(val)
    },
    justify: {
      type: String,
      default: 'start',
      validator: val => ['start', 'end', 'center', 'between', 'around', 'stretch'].includes(val)
    }
  },
  computed: {
    rootClasses () {
      return [
        ...{
          row: ['app-flex-row'],
          col: ['app-flex-col']
        }[this.direction],
        ...{
          start: ['app-items-start'],
          end: ['app-items-end'],
          center: ['app-items-center'],
          stretch: ['app-items-stretch']
        }[this.align],
        ...{
          start: ['app-justify-start'],
          end: ['app-justify-end'],
          center: ['app-justify-center'],
          between: ['app-justify-between'],
          around: ['app-justify-around'],
          stretch: []
        }[this.content],
        ...{
          nowrap: ['app-flex-no-wrap'],
          wrap: ['app-flex-wrap'],
          'wrap-reverse': ['app-flex-wrap-reverse']
        }[this.wrap],
        ...{
          start: ['app-justify-start'],
          end: ['app-justify-end'],
          center: ['app-justify-center'],
          between: ['app-justify-between'],
          around: ['app-justify-around'],
          stretch: []
        }[this.justify]
      ]
    }
  }
}
</script>
