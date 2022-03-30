<template>
  <main :data-name="$NAME">
    ProjectsPage
    {{ $prismic.asText(document.data.heading) }}
  </main>
</template>

<script>
export default {
  name: 'ProjectsPage',
  asyncData ({ $prismic }) {
    return $prismic.api.getSingle('home')
      .then(document => ({ document }))
  },
  data: () => ({
    document: {}
  }),
  head: {
    title: 'Projects',
  }
}
</script>

<style>

</style>
