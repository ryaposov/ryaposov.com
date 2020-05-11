<template>
  <div>
    <span
      class="app-text-tertiary app-label-12-semibold md:app-label-16-semibold"
      v-text="heading"
    />
    <AppItemFeature
      v-for="(item, index) in items"
      :key="index"
      v-bind="item"
    />
  </div>
</template>

<script>
  import AppItemFeature from '~/components/AppItemFeature'

  export default {
    name: 'IndexLastItems',
    components: {
      AppItemFeature
    },
    props: {
      heading: {
        type: String,
        default: ''
      },
      items: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<style>

</style>