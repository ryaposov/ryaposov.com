<template>
  <main>
    <IndexTop
      :intro="intro"
      :skills="skills"
      class="md:app-pt-144 md:app-pb-60 md:app--mt-144"
    />
    <IndexLastItems
      :items="lastPosts"
      heading="Last Posts"
    />
    <IndexLastItems
      :items="lastProjects"
      heading="Last Projects"
    />
  </main>
</template>

<script>
  import IndexTop from '~/pages-partials/index/IndexTop.vue'
  import IndexLastItems from '~/pages-partials/index/IndexLastItems.vue'

  export default {
    name: 'HomePage',
    components: {
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
          $prismic.predicates.at('document.type', 'projects'),
          { orderings : '[my.post.date desc]' }
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
          text: this.$prismic.asText(item.data.text),
          data: item.data.data
        }))
      },
      lastProjects () {
        return this.projects.results.map(item => ({
          ...item,
          title: this.$prismic.asText(item.data.title),
          text: this.$prismic.asText(item.data.text),
          data: item.data.data
        }))
      }
    }
  }
</script>

<style>
  
</style>