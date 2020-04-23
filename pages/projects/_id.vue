<template>
  <div>
    ProjectIdPage
  </div>
</template>

<script>
export default {
  name: 'ProjectIdPage',
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