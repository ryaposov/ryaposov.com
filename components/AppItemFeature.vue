<template>
  <article>
    <span
      v-text="title"
    />
    <span
      v-text="text"
    />
    <span
      v-text="date"
    />
    <span
      v-text="image"
    />
  </article>
</template>

<script>
export default {
  name: 'AppItemFeature',
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    image: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>

</style>