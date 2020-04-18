<template>
  <section class="container">
    <div>
      <h1 class="title">
        Home
      </h1>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomePage',
    asyncData ({ $http }) {
      return $http.$get('api/posts')
        .then(data => ({items: data }))
    },
    data: () => ({
      items: {
        data: [],
        limit: 10,
        skip: 0,
        total: 0
      }
    })
  }
</script>

<style>
  
</style>