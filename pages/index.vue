<template>
  <main :data-name="$NAME">
    <AppStack
      align="center"
      class="md:app--mt-96 md:app-h-100vh md:app-min-h-600 md:app-max-h-1000"
    >
      <AppContainer
        class="app-px-16 app-mt-60 app-mb-52
        md:app-px-initial md:app-mt-initial md:app-mb-initial"
      >
        <IndexTop
          :heading="intro.heading"
          :text="intro.text"
          :links="intro.links"
          :image-id="intro.imageId"
        />
      </AppContainer>
    </AppStack>
    <AppBorder />
    <AppContainer
      class="app-px-16 app-py-40
        md:app-px-initial md:app-py-160"
    >
      <IndexLastItems
        :items="lastPosts"
        heading="Latest Posts"
      />
    </AppContainer>
    <AppBorder />
    <AppContainer
      class="app-px-16 app-py-40
        md:app-px-initial md:app-py-160"
    >
      <IndexJobs
        :items="jobs"
        heading="Work"
      />
    </AppContainer>
    <AppBorder class="" />
    <AppContainer
      class="app-pt-40 app-px-16 app-pb-40
        md:app-px-initial md:app-py-160"
    >
      <IndexLinks
        :items="links"
        heading="Links"
      />
    </AppContainer>
  </main>
</template>

<script>
  import AppContainer from '~/components/AppContainer.vue'
  import AppBorder from '~/components/AppBorder.vue'
  import AppStack from '~/components/AppStack.vue'

  import IndexTop from '~/pages-partials/index/IndexTop.vue'
  import IndexLastItems from '~/pages-partials/index/IndexLastItems.vue'
  import IndexJobs from '~/pages-partials/index/IndexJobs.vue'
  import IndexLinks from '~/pages-partials/index/IndexLinks.vue'

  import dayjs from 'dayjs'
  import advancedFormat from 'dayjs/plugin/advancedFormat'

  dayjs.extend(advancedFormat)

  export default {
    name: 'IndexPage',
    components: {
      AppContainer,
      AppBorder,
      AppStack,
      IndexTop,
      IndexLastItems,
      IndexJobs,
      IndexLinks
    },
    asyncData ({ $prismic }) {
      return Promise.all([
        $prismic.api.getSingle('home'),
        $prismic.api.query(
          $prismic.predicates.at('document.type', 'post'),
          { orderings : '[my.post.date desc]', pageSize: 5 }
        ),
        $prismic.api.query(
          $prismic.predicates.at('document.type', 'project'),
          { orderings : '[my.project.date desc]', pageSize: 5 }
        )
      ])
      .then(([home, posts, projects]) => ({ home, posts, projects }))
    },
    data: () => ({
      home: {},
      posts: {
        results: []
      },
      projects: {
        results: []
      }
    }),
    head: {
      title: 'About'
    },
    computed: {
      intro () {
        return {
          heading: this.$prismic.asText(this.home.data.intro_heading),
          text: this.$prismic.asText(this.home.data.intro_text),
          links: this.home.data.intro_links.map(item => ({
            text: this.$prismic.asText(item.text),
            url: item.link.url
          })),
          imageId: this.$prismic.asText(this.home.data.intro_image_id)
        }
      },
      lastPosts () {
        return this.posts.results.map(item => ({
          title: this.$prismic.asText(item.data.title),
          text: this.$prismic.asText(item.data.introtext).substr(0, 200) + '..',
          date: dayjs(item.data.date).format('MMMM, Do YYYY'),
          to: {
            name: 'posts-id',
            params: { id: item.uid }
          }
        }))
      },
      lastProjects () {
        return this.projects.results.map(item => ({
          title: this.$prismic.asText(item.data.title),
          text: this.$prismic.asText(item.data.text).substr(0, 200) + '..',
          date: dayjs(item.data.date).format('MMMM, Do YYYY'),
          to: {
            name: 'projects-id',
            params: { id: item.uid }
          }
        }))
      },
      jobs () {
        return this.home.data.jobs.map(item => ({
          title: this.$prismic.asText(item.title),
          subtitle: this.$prismic.asText(item.subtitle),
          text: this.$prismic.asText(item.text)
        }))
      },
      links () {
        return this.home.data.links.map(item => ({
          title: this.$prismic.asText(item.title),
          text: this.$prismic.asText(item.username),
          href: item.link ? item.link.url : undefined
        }))
      },
    }
  }
</script>