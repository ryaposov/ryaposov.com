<template>
  <main :data-name="$NAME">
    PostsPage
    {{ $prismic.asText(document.data.heading) }}
  </main>
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
  }),
  head: {
    title: 'Posts',
  }
}
</script>

<style>

</style>