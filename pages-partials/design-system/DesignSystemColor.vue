<template>
  <div
    :data-name="$NAME"
    :style="{ backgroundColor: `var(${color})` }"
    class="app-w-84 app-h-84 app-rounded-16
      md:app-w-100 md:app-h-100"
  />
</template>

<script>

export default {
  name: 'DesignSystemColor',
  props: {
    color: {
      type: String,
      default: ''
    }
  }
}
</script>
