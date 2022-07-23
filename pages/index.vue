<template>
  <main :data-name="$NAME">
    <AppStack
      align="center"
      class="md:app--mt-96 md:app-h-100vh md:app-min-h-600 md:app-max-h-1000"
    >
      <AppContainer
        class="app-px-16 app-mt-60 app-mb-60
        md:app-px-initial md:app-mt-initial md:app-mb-initial"
      >
        <IndexTop
          :heading="intro.heading"
          :text="intro.text"
          :links="intro.links"
        />
      </AppContainer>
    </AppStack>
    <AppBorder />
    <AppContainer
      class="app-px-16 app-py-40
        md:app-px-initial md:app-py-160"
    >
      <IndexProjects
        :items="projects"
        heading="Projects"
      />
    </AppContainer>
    <AppBorder />
    <AppContainer
      class="app-px-16 app-py-40
        md:app-px-initial md:app-py-160"
    >
      <IndexPosts
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
  import IndexProjects from '~/pages-partials/index/IndexProjects.vue'
  import IndexPosts from '~/pages-partials/index/IndexPosts.vue'
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
      IndexProjects,
      IndexPosts,
      IndexJobs,
      IndexLinks
    },
    asyncData ({ $prismic }) {
      return Promise.all([
        $prismic.api.getSingle('home', { fetchLinks: ['project.title', 'project.introtext', 'project.date', 'project.tags', 'project.list_image'] }),
        $prismic.api.query(
          $prismic.predicates.at('document.type', 'post'),
          { orderings : '[my.post.date desc]', pageSize: 5 }
        )
      ])
      .then(([home, posts]) => ({ home, posts }))
    },
    data: () => ({
      home: {},
      posts: {
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
          text: this.$prismic.asHtml(this.home.data.intro_text),
          links: this.home.data.intro_links.map(item => ({
            text: this.$prismic.asText(item.text),
            url: item.link.url
          }))
        }
      },
      lastPosts () {
        return this.posts.results.map(item => ({
          title: this.$prismic.asText(item.data.title),
          text: this.$prismic.asText(item.data.introtext).substr(0, 500) + '..',
          date: dayjs(item.data.date).format('MMMM, Do YYYY'),
          to: {
            name: 'posts-id',
            params: { id: item.uid }
          }
        }))
      },
      projects () {
        return this.home.data.projects.map(item => ({
          title: this.$prismic.asText(item.link.data.title),
          text: this.$prismic.asText(item.link.data.introtext),
          date: item.link.data.date,
          image: item.link.data.list_image,
          tags: item.link.data.tags,
          to: {
            name: 'projects-id',
            params: { id: item.link.uid }
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
