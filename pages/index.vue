<template>
  <main :data-name="$NAME">
    <AppContainer
      class="app-mt-60 app-mb-40 app-px-16 
        md:app-mt-220 md:app-mb-320 md:app-px-initial"
    >
      <IndexTop
        :heading="intro.heading"
        :text="intro.text"
        :email="intro.email"
        :twitter="intro.twitter"
      />
    </AppContainer>
    <AppBorder />
    <AppContainer
      class="app-px-16 app-py-40
        md:app-px-initial md:app-py-160"
    >
      <IndexLastItems
        :items="lastPosts"
        heading="Last Posts"
      />
    </AppContainer>
  </main>
</template>

<script>
  import AppContainer from '~/components/AppContainer.vue'
  import AppBorder from '~/components/AppBorder.vue'

  import IndexTop from '~/pages-partials/index/IndexTop.vue'
  import IndexLastItems from '~/pages-partials/index/IndexLastItems.vue'

  export default {
    name: 'IndexPage',
    components: {
      AppContainer,
      AppBorder,
      IndexTop,
      IndexLastItems
    },
    asyncData ({ $prismic }) {
      return Promise.all([
        $prismic.api.getSingle('home'),
        $prismic.api.query(
          $prismic.predicates.at('document.type', 'post'),
          { orderings : '[my.post.date desc]' }
        ),
        $prismic.api.query(
          $prismic.predicates.at('document.type', 'project'),
          { orderings : '[my.project.date desc]' }
        )
      ])
      .then(([home, posts, projects]) => ({ home, posts, projects }))
      .catch(console.log)
    },
    data: () => ({
      home: {},
      posts: [],
      projects: []
    }),
    computed: {
      intro () {
        return {
          heading: this.$prismic.asText(this.home.data.intro_heading),
          text: this.$prismic.asText(this.home.data.intro_text),
          email: this.$prismic.asText(this.home.data.intro_email),
          twitter: this.$prismic.asText(this.home.data.intro_twitter)
        }
      },
      lastPosts () {
        return this.posts.results.map(item => ({
          title: this.$prismic.asText(item.data.title),
          text: this.$prismic.asText(item.data.text).substr(0, 200) + '..',
          // date: this.$prismic.asText(item.data.date),
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
          // date: this.$prismic.asText(item.data.date),
          to: {
            name: 'projects-id',
            params: { id: item.uid }
          }
        }))
      }
    },
    head: {
      title: 'About',
    }
  }
</script>

<style>
  
</style>