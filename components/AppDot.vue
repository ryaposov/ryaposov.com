<template>
  <span
    class="app-inline-block app-align-middle app-w-4 app-h-4 app-rounded-full"
    :data-name="$NAME"
    :class="rootClasses"
  />
</template>

<script>
export default {
  name: 'AppDot',
  props: {
    color: {
      type: String,
      default: 'gray',
      validator: val => ['gray', 'brand'].includes(val)
    }
  },
  computed: {
    rootClasses () {
      return [
        ...{
          gray: ['app-bg-bg-3', 'dark:app-bg-dbg-3'],
          brand: ['app-bg-bg-brand']
        }[this.color]
      ]
    }
  }
}
</script>
