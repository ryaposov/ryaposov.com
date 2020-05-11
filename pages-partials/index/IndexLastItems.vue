<template>
  <div class="app-flex app-flex-col">
    <span
      class="app-text-tertiary app-label-12-semibold app-mb-24 md:mb-28 md:app-label-16-semibold"
      v-text="heading"
    />
    <div class="app-flex app-flex-col md:app-flex-row">
      <AppItemFeature
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
        class="app-mb-36 last:app-mb-initial md:app-w-1/2 md:app-pr-28 md:last:app-pr-initial md:app-mb-initial md:last:app-pl-28"
      />
    </div>
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