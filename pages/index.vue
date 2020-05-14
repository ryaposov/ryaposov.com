<template>
  <main>
    <AppContainer>
      <IndexTop
        :heading="intro.heading"
        :text="intro.text"
        :email="intro.email"
        :twitter="intro.twitter"
        class="app-mt-60 app-mb-40 app-px-16 md:app-px-initial"
      />
    </AppContainer>
    <AppContainer>
      <IndexLastItems
        :items="lastPosts"
        heading="Last Posts"
        class="app-px-16 app-py-40 md:app-px-initial md:app-py-160"
      />
    </AppContainer>
    <!-- <hr class="app-border-tertiary app-opacity-25 app-mx-8 md:app-max-w-840 md:app-mx-auto"> -->
  </main>
</template>

<script>
  import AppContainer from '~/components/AppContainer.vue'

  import IndexTop from '~/pages-partials/index/IndexTop.vue'
  import IndexLastItems from '~/pages-partials/index/IndexLastItems.vue'

  export default {
    name: 'HomePage',
    components: {
      AppContainer,
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
      skills () {
        return {
          heading: this.$prismic.asText(this.home.data.skills_heading),
          list: this.home.data.skills_list.map((item, index) => this.$prismic.asText(item.skill_item))
        }
      },
      lastPosts () {
        return this.posts.results.map(item => ({
          ...item,
          title: this.$prismic.asText(item.data.title),
          text: this.$prismic.asText(item.data.text).substr(0, 140) + '..',
          data: item.data.data,
          to: {
            name: 'posts-id',
            params: {
              id: item.uid
            }
          }
        }))
      },
      lastProjects () {
        return this.projects.results.map(item => ({
          ...item,
          title: this.$prismic.asText(item.data.title),
          text: this.$prismic.asText(item.data.text).substr(0, 140) + '..',
          data: item.data.data,
          to: {
            name: 'projects-id',
            params: {
              id: item.uid
            }
          }
        }))
      }
    }
  }
</script>

<style>
  
</style>