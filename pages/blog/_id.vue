<template>
  <div>
    PostsIdPage
  </div>
</template>

<script>
export default {
  name: 'PostsIdPage',
  asyncData ({ $http }) {
    return $http.$get('api/posts', { })
      .then(data => ({ post: data }))
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