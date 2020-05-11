<template>
  <article class="app-flex app-flex-col">
    <span
      class="app-text-primary app-heading-20-bold app-mb-16 md:app-mb-12"
      v-text="title"
    />
    <span
      class="app-text-secondary app-text-17-regular"
      v-text="text"
    />
    <span
      v-text="date"
    />
    <!-- <span
      v-text="image"
    /> -->
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