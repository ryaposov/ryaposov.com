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
    asyncData (context) {
      return { project: 'nuxt' }
    },
    data: () => ({
      project: ''    
    })
  }
</script>

<style>
  
</style>