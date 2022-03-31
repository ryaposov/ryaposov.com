<template>
  <component
    :is="tag"
    :data-name="$NAME"
  class="component app-max-w-880 app-w-full md:app-mx-auto md:app-max-w-912 md:app-px-16"
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

<style scoped>
  .component {
    /* @media (min-width: 880px) and (max-width: 912px) {
      padding-left: calc(50vw - 50% - 16px + 16px);
      padding-right: calc(50vw - 50% - 16px + 16px);
    } */
  }
</style>
