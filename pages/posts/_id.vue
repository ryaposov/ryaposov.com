<template>
  <main :data-name="$NAME">
    PostsIdPage
  </main>
</template>

<script>
export default {
  name: 'PostsIdPage',
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