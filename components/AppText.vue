<template src="./vueTypographyTemplate.vue" />

<script>
import arrayIntToStrings from '~/helpers/arrayIntToStrings.js'
import vueTypographyMixin from './vueTypographyMixin.js'

const allowedTags = ['span', 'p', 'i', 'strong']
const allowedWeights = ['bold', 'semibold', 'medium', 'regular']
const allowedSizes = arrayIntToStrings(20, 18, 16, 14)

export default {
  name: 'AppHeading',
  mixins: [vueTypographyMixin(
    { tag: 'span', display: 'inline', weight: 'medium', color: '1' },
    { allowedTags, allowedWeights, allowedSizes }
  )],
  props: {
    // Props inherited from mixin
  },
  computed: {
    rootClasses () {
      return [
        ...this.$rootClasses,
        ...{
          bold: ['app-font-bold'],
          semibold: ['app-font-semibold'],
          medium: ['app-font-medium'],
          regular: ['app-font-regular']
        }[this.weight],
        ...{
          20: ['app-text-20', 'app-leading-32'],
          18: ['app-text-18', 'app-leading-28'],
          16: ['app-text-16', 'app-leading-24'],
          14: ['app-text-14', 'app-leading-20']
        }[this.$responsiveProp('size')],
      ]
    }
  },
  methods: {
    // Methods inherited from mixin
  }
}
</script>