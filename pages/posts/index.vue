<template>
  <main :data-name="$NAME">
    <AppStack
      tag="section"
      align="end"
      class="md:app--mt-96 md:app-h-320 md:q-pb-"
    >
      <AppContainer
        class="app-px-16 app-pt-60 app-pb-32
        md:app-px-initial md:app-pt-initial md:app-pb-initial"
      >
        <AppHeading
          :size="[24, 48]"
          color="4"
          text="Latest Posts"
          weight="extrabold"
        />
      </AppContainer>
    </AppStack>
    <AppContainer
      tag="section"
      class="app-px-16 app-pb-40 md:app-pb-160 md:app-px-initial md:app-mt-80"
    >
      <AppStack direction="col">
        <IndexItemFeature
          v-for="(item, index) in postsList"
          :key="index"
          v-bind="item"
          class="app-mb-32 last:app-mb-initial md:app-mb-60"
        />
      </AppStack>
    </AppContainer>
  </main>
</template>

<script>
import AppContainer from '~/components/AppContainer.vue'
import AppStack from '~/components/AppStack.vue'
import AppHeading from '~/components/AppHeading.vue'
import IndexItemFeature from '~/pages-partials/index/IndexItemFeature.vue'

import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

export default {
  name: 'PostsPage',
  components: {
    AppStack,
    AppContainer,
    AppHeading,
    IndexItemFeature
  },
  asyncData ({ $prismic }) {
    return $prismic.api.query([
      $prismic.predicates.at('document.type', 'post'),
    ], { orderings : '[my.post.date desc]', pageSize: 10 })
      .then(posts => ({ posts }))
  },
  data: () => ({
    posts: []
  }),
  computed: {
    postsList () {
      return [...this.posts.results.map(item => ({
          title: this.$prismic.asText(item.data.title),
          text: this.$prismic.asText(item.data.text).substr(0, 200) + '..',
          date: dayjs(item.data.date).format('MMMM, Do YYYY'),
          to: {
            name: 'posts-id',
            params: { id: item.uid }
          }
        }))]
    }
  },
  head: {
    title: 'Posts',
  }
}
</script>

<style>

</style>