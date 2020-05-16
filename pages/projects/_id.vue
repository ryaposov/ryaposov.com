<template>
  <main :data-name="$NAME">
    ProjectIdPage
  </main>
</template>

<script>
export default {
  name: 'ProjectIdPage',
  asyncData ({ $http }) {
    return {}
  },
  data: () => ({
    post: {}
  }),
  computed: {
    
  }
}
</script>

<style>

</style>