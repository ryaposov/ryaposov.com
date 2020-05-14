<template>
  <component
    :is="tag"
    :data-name="$NAME"
    class="app-max-w-880 app-mx-auto"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AppContainer',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>