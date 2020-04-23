<template>
  <section class="container">
    Home
    {{ $prismic.asText(document.data.heading) }}
  </section>
</template>

<script>
  export default {
    name: 'HomePage',
    asyncData ({ $prismic }) {
      return $prismic.api.getSingle('home')
        .then(document => ({ document }))
    },
    data: () => ({
      document: {}
    })
  }
</script>

<style>
  
</style>