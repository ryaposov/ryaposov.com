<template src="./vueTypographyTemplate.vue" />

<script>
import arrayIntToStrings from '~/helpers/arrayIntToStrings.js'
import vueTypographyMixin from './vueTypographyMixin.js'

const allowedTags = ['span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'NuxtLink']
const allowedWeights = ['extrabold', 'bold', 'semibold, medium']
const allowedSizes = arrayIntToStrings(48, 36, 32, 28, 24, 20, 18, 16)
const allowedLeading = ['regular', 'compact']

export default {
  name: 'AppHeading',
  mixins: [vueTypographyMixin(
    { tag: 'span', display: 'block', weight: 'bold', color: '1', leading: 'regular' },
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
          extrabold: ['app-font-extrabold'],
          bold: ['app-font-bold'],
          semibold: ['app-font-semibold'],
          medium: ['app-font-medium']
        }[this.$responsiveProp('weight')],
        ...{
          48: {
            regular: ['app-text-48', 'app-leading-60'],
            compact: ['app-text-48', 'app-leading-52'],
          },
          36: {
            regular: ['app-text-36', 'app-leading-56'],
            compact: ['app-text-36', 'app-leading-40'],
          },
          32: {
            regular: ['app-text-32', 'app-leading-52'],
            compact: ['app-text-32', 'app-leading-36'],
          },
          28: {
            regular: ['app-text-28', 'app-leading-40'],
            compact: ['app-text-28', 'app-leading-32'],
          },
          24: {
            regular: ['app-text-24', 'app-leading-36'],
            compact: ['app-text-24', 'app-leading-28'],
          },
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
        }[this.$responsiveProp('size')][this.$responsiveProp('leading')]
      ]
    }
  },
  methods: {
    // Methods inherited from mixin
  }
}
</script>