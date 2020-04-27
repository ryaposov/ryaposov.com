<template>
  <section class="app-bg-secondary">
    <div class="app-max-w-840 app-mx-auto app-flex app-justify-between">
      <IndexTopIntro
        :heading="intro.heading"
        :text="intro.text"
        :email="intro.email"
        :twitter="intro.twitter"
      />
      <IndexTopSkills
        v-if="$MD"
        :heading="skills.heading"
        :list="skills.list"
        class="app-ml-28"
      />
    </div>
  </section>
</template>

<script>
  import IndexTopIntro from './IndexTopIntro.vue'
  import IndexTopSkills from './IndexTopSkills.vue'

  export default {
    name: 'IndexTop',
    components: {
      IndexTopIntro,
      IndexTopSkills
    },
    props: {
      intro: {
        type: Object,
        default: () => ({
          heading: '',
          text: '',
          email: '',
          twitter: ''
        })
      },
      skills: {
        type: Object,
        default: () => ({
          heading: '',
          list: []
        })
      }
    }
  }
</script>

<style>

</style>