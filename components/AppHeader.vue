<template>
  <nav class="app-container app-px-40">
    <ul class="app-flex app-items-center app-flex-wrap app-px-16 app-py-32 md:app-py-60 md:app-px-initial">
      <li class="app-flex-grow app-mb-12 md:app-mb-initial">
        <NuxtLink
          :to="{ name: 'index' }"
          class="app-block"
        >
          <AppLogo class="app-block app-text-primary app-transition app-duration-300 app-ease-in-out hover:app-opacity-50" />
        </NuxtLink>
      </li>
      <li>
        <ul class="app-flex app-items-center app-flex-nowrap">
          <li
            v-for="link in links"
            :key="link.to.name"
            class="app-transition app-duration-300 app-ease-in-out hover:app-opacity-50 app-mr-20 md:app-mr-initial md:app-ml-40"
          >
            <NuxtLink
              :to="link.to"
              class="app-label-12-semibold app-block"
              :class="linkClasses(link.to.name)"
              v-text="link.text"
            />
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppLogo from './AppLogo.vue'

export default {
  name: 'AppHeader',
  components: {
    AppLogo
  },
  data: () => ({
    links: [
      {
        text: 'Everything',
        to: {
          name: 'index'
        }
      },
      {
        text: 'Development',
        to: {
          name: 'post-id'
        }
      },
      {
        text: 'Design',
        to: {
          name: 'posts-id'
        }
      }
    ]
  }),
  methods: {
    linkClasses (link) {
      return [
        ...{
          true: ['app-text-primary'],
          false: ['app-text-tertiary']
        }[this.$router.currentRoute.name === link]
      ]
    }
  }
}
</script>

<style>

</style>