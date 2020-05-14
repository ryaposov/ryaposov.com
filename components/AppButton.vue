<template>
  <component
    :is="tag"
    :to="to"
    :class="rootClasses"
    class="app-button"
  >
    <AppIcon
      v-if="icon"
      class="app-button__icon"
      :class="iconClasses"
    />
    <span
      class="app-button__text"
      :class="textClasses"
    >
      <slot>
        {{ text }}
      </slot>
      <span
        :class="lineClasses"
        class="app-button__line"
      />
    </span>
  </component>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  name: 'AppButton',
  components: {
    AppIcon
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
    size: {
      type: String,
      default: 'medium',
      validator: val => ['xsmall', 'small', 'medium', 'large'].includes(val)
    },
    weight: {
      type: String,
      default: 'regular',
      validator: val => ['regular', 'medium'].includes(val)
    },
    icon: {
      type: [String, Boolean],
      default: false
    },
    iconPosition: {
      type: String,
      default: 'start',
      validator: val => ['start', 'end'].includes(val)
    },
    underlined: {
      type: Boolean,
      default: false
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
          xsmall: [],
          small: [],
          medium: [],
          large: []
        }[this.size]
      ]
    },
    textClasses () {
      return [
        ...{
          regular: {
            xsmall: [],
            small: [],
            medium: [],
            large: []
          },
          medium: {
            xsmall: [],
            small: [],
            medium: [],
            large: []
          }
        }[this.weight][this.size]
      ]
    },
    lineClasses () {
      return [
        ...{
          xsmall: [],
          small: [],
          medium: [],
          large: []
        }[this.size]
      ]
    },
    iconClasses () {
      return [
        ...{
          xsmall: [],
          small: [],
          medium: [],
          large: []
        }[this.size]
      ]
    }
  }
}
</script>

<style>
  .app-button {
    &__text {}
    
    &__icon {}

    &--size-small {}
    
    &--size-medium {}
    
    &--size-large {}

    &--weight-regular {}

    &--weight-medium {}

    &--icon-position-start {}

    &--icon-position-end {}

    &--underlined {}

    &--icon {}
  }
</style>