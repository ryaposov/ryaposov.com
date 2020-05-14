<template>
  <component
    :is="tag"
    :data-name="$parent.$options.name.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toUpperCase()"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>