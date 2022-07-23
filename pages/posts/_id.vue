<template>
  <main
    :data-name="$NAME"
    class="app-pt-44 md:app-pt-160"
  >
    <AppContainer
      max-width="sm"
      class="app-px-16 md:app-px-60"
    >
      <PostsIdTop
        :date="parsedPost.date"
        :heading="parsedPost.title"
        :link="{ name: 'posts' }"
      />
    </AppContainer>
    <AppContainer
      max-width="sm"
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
      max-width="sm"
      class="app-px-16 app-pb-40 md:app-px-60 md:app-pb-116"
    >
      <PostsIdOther :items="otherParsedPosts" />
    </AppContainer>
  </main>
</template>

<script>
import AppBorder from '~/components/AppBorder.vue'
import AppContainer from '~/components/AppContainer.vue'

import PostsIdTop from '~/pages-partials/posts/PostsIdTop.vue'
import PostsIdContent from '~/pages-partials/posts/PostsIdContent.vue'
import PostsIdOther from '~/pages-partials/posts/PostsIdOther.vue'

import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

export default {
  name: 'PostsIdPage',
  components: {
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
  head () {
    return {
      title: this.parsedPost.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$prismic.asText(this.post.data.introtext)
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.$prismic.asText(this.post.data.introtext)
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.parsedPost.title
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: this.$DOMAIN + this.$route.fullPath
        }
      ]
    }
  },
  computed: {
    otherParsedPosts () {
      return this.otherPosts.results.map(item => ({
        title: this.$prismic.asText(item.data.title),
        text: this.$prismic.asText(item.data.introtext).substr(0, 200) + '..',
        date: dayjs(item.data.date).format('MMMM, Do YYYY'),
        to: {
          name: 'posts-id',
          params: { id: item.uid }
        }
      }))
    },
    parsedPost () {
      return {
        date: dayjs(this.post.data.date).format('MMMM, Do YYYY'),
        title: this.$prismic.asText(this.post.data.title),
        subtitle: this.$prismic.asText(this.post.data.subtitle),
        text: this.$prismic.asHtml(this.post.data.text),
        introtext: this.$prismic.asHtml(this.post.data.introtext)
      }
    }
  }
}
</script>
