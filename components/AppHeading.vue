<template src="./vueTypographyTemplate.vue" />

<script>
import arrayIntToStrings from '~/helpers/arrayIntToStrings.js'
import vueTypographyMixin from './vueTypographyMixin.js'

const allowedTags = ['span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'NuxtLink']
const allowedWeights = ['extrabold', 'bold', 'semibold, medium']
const allowedSizes = arrayIntToStrings(48, 36, 32, 28, 24, 20, 18, 16)

export default {
  name: 'AppHeading',
  mixins: [vueTypographyMixin(
    { tag: 'span', display: 'block', weight: 'bold', color: '1' },
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
          extrabold: ['app-font-extrabold'],
          bold: ['app-font-bold'],
          semibold: ['app-font-semibold'],
          medium: ['app-font-medium']
        }[this.$responsiveProp('weight')],
        ...{
          48: ['app-text-48', 'app-leading-60'],
          36: ['app-text-36', 'app-leading-56'],
          32: ['app-text-32', 'app-leading-52'],
          28: ['app-text-28', 'app-leading-40'],
          24: ['app-text-24', 'app-leading-36'],
          20: ['app-text-20', 'app-leading-32'],
          18: ['app-text-18', 'app-leading-28'],
          16: ['app-text-16', 'app-leading-24']
        }[this.$responsiveProp('size')]
      ]
    }
  },
  methods: {
    // Methods inherited from mixin
  }
}
</script>