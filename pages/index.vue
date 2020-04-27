<template>
  <main>
    <IndexTop
      :intro="intro"
      :skills="skills"
      class="app-pt-144 app-pb-60 app--mt-144"
    />
  </main>
</template>

<script>
  import IndexTop from '~/pages-partials/index/IndexTop.vue'

  export default {
    name: 'HomePage',
    components: {
      IndexTop
    },
    asyncData ({ $prismic }) {
      return $prismic.api.getSingle('home')
        .then(document => ({ document }))
    },
    data: () => ({
      document: {}
    }),
    computed: {
      intro () {
        return {
          heading: this.$prismic.asText(this.document.data.intro_heading),
          text: this.$prismic.asText(this.document.data.intro_text),
          email: this.$prismic.asText(this.document.data.intro_email),
          twitter: this.$prismic.asText(this.document.data.intro_twitter)
        }
      },
      skills () {
        return {
          heading: this.$prismic.asText(this.document.data.skills_heading),
          list: this.document.data.skills_list.map((item, index) => this.$prismic.asText(item.skill_item))
        }
      }
    }
  }
</script>

<style>
  
</style>