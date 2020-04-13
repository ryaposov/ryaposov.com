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
      default: 'a'
    },
    size: {
      type: String,
      validator: val => ['small', 'large'].includes(val),
      default: 'small'
    }
  },
  computed: {
    rootClasses () {
      return {
        'app-logo--size-small': this.size === 'small',
        'app-logo--size-large': this.size === 'large'
      }
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
      font-size: 20px;
      line-height: 32px;
    }
  }
</style>