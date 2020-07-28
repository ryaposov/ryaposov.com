<template>
  <main
    :data-name="$NAME"
    class="app-pt-60 md:app-pt-160"
  >
    <AppContainer class="app-px-16 md:app-px-60">
      <PostsIdTop
        :date="parsedPost.date"
        :heading="parsedPost.title"
        :link="{ name: 'posts' }"
      />
    </AppContainer>
    <AppContainer
      class="app-mt-20 app-px-16
        md:app-mt-36 md:app-px-60"
    >
      <PostsIdContent
        :text="parsedPost.text"
      />
    </AppContainer>
    <AppBorder
      class="app-my-60 md:app-my-100"
    />
    <AppContainer
      class="app-px-16 app-pb-40 md:app-px-60 md:app-pb-116"
    >
      <PostsIdOther :items="otherPrasedPosts" />
    </AppContainer>
  </main>
</template>

<script>
import AppText from '@/components/AppText.vue'
import AppBorder from '@/components/AppBorder.vue'
import AppContainer from '@/components/AppContainer.vue'

import PostsIdTop from '@/pages-partials/posts/PostsIdTop.vue'
import PostsIdContent from '@/pages-partials/posts/PostsIdContent.vue'
import PostsIdOther from '@/pages-partials/posts/PostsIdOther.vue'

import distanceInWordsToNow from 'date-fns/formatDistanceToNow'

export default {
  name: 'PostsIdPage',
  components: {
    // AppText,
    AppContainer,
    AppBorder,
    PostsIdTop,
    PostsIdContent,
    PostsIdOther
  },
  asyncData ({ $prismic, route }) {
    return Promise.all([
        $prismic.api.getByUID('post', route.params.id),
        $prismic.api.query([
          $prismic.predicates.at('document.type', 'post'),
          $prismic.predicates.not('my.post.uid', route.params.id),
        ], { orderings : '[my.post.date desc]', pageSize: 2 })
      ])
      .then(([post, otherPosts]) => ({ post, otherPosts }))
  },
  data: () => ({
    post: {
      date: '',
      title: '',
      subtitle: '',
      text: '',
      introtext: ''
    },
    otherPosts: {}
  }),
  computed: {
    otherPrasedPosts () {
      return this.otherPosts.results.map(item => ({
        title: this.$prismic.asText(item.data.title),
        text: this.$prismic.asText(item.data.text).substr(0, 200) + '..',
        // date: this.$prismic.asText(item.data.date),
        to: {
          name: 'posts-id',
          params: { id: item.uid }
        }
      }))
    },
    parsedPost () {
      return {
        date: distanceInWordsToNow(
          new Date(this.post.data.date),
          { addSuffix: true }
        ),
        title: this.$prismic.asText(this.post.data.title),
        subtitle: this.$prismic.asText(this.post.data.subtitle),
        text: this.$prismic.asHtml(this.post.data.text),
        introtext: this.$prismic.asHtml(this.post.data.introtext)
      }
    }
  }
}
</script>