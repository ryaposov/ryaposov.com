<template src="./vueTypographyTemplate.vue" />

<script>
import arrayIntToStrings from '~/helpers/arrayIntToStrings.js'
import vueTypographyMixin from './vueTypographyMixin.js'

const allowedTags = ['span', 'p', 'i', 'strong', 'NuxtLink', 'div']
const allowedWeights = ['bold', 'semibold', 'medium', 'regular']
const allowedSizes = arrayIntToStrings(20, 18, 16, 14)
const allowedLeading = ['regular', 'compact']

export default {
  name: 'AppText',
  mixins: [vueTypographyMixin(
    { tag: 'span', display: 'inline', weight: 'medium', color: '1', leading: 'regular' },
    { allowedTags, allowedWeights, allowedSizes, allowedLeading }
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
          20: {
            regular: ['app-text-20', 'app-leading-32'],
            compact: ['app-text-20', 'app-leading-24'],
          },
          18: {
            regular: ['app-text-18', 'app-leading-28'],
            compact: ['app-text-18', 'app-leading-22'],
          },
          16: {
            regular: ['app-text-16', 'app-leading-24'],
            compact: ['app-text-16', 'app-leading-20'],
          },
          14: {
            regular: ['app-text-14', 'app-leading-20'],
            compact: ['app-text-14', 'app-leading-16'],
          }
        }[this.$responsiveProp('size')][this.$responsiveProp('leading')]
      ]
    }
  },
  methods: {
    // Methods inherited from mixin
  }
}
</script>