<template>
  <component
    :is="tag"
    :class="rootClasses"
    class="app-logo"
    v-text="'Pavel Ryaposov'"
  />
</template>

<script>
export default {
  name: 'AppLogo',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: String,
      validator: val => ['small', 'large'].includes(val),
      default: 'small'
    }
  },
  computed: {
    rootClasses () {
      return [
        ...{
          small: ['app-logo--size-small'],
          large: ['app-logo--size-large']
        }[this.size]
      ]
    }
  }
}
</script>

<style>
  .app-logo {
    font-family: 'Catamaran', sans-serif;
    font-weight: 900;
    letter-spacing: 3px;
    text-transform: uppercase;

    &--size-small {
      font-size: 16px;
      line-height: 24px;
    }
    
    &--size-large {
      font-size: 18px;
      line-height: 32px;
    }
  }
</style>