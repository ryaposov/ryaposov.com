<template>
  <div>
    PostsPage
    {{ $prismic.asText(document.data.heading) }}
  </div>
</template>

<script>
export default {
  name: 'PostsPage',
  asyncData ({ $prismic }) {
    console.log('posts')
    console.time('postsAsyncData')
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