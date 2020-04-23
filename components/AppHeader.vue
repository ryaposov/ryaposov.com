<template>
  <nav class="app-container">
    <ul class="app-flex app-items-center app-flex-wrap app-px-16 app-py-32 md:app-py-60 md:app-px-initial">
      <li class="app-flex-grow app-mb-12 md:app-mb-initial">
        <NuxtLink
          :to="{ name: 'index' }"
          class="app-block"
        >
          <AppLogo
            :size="$MD ? 'small' : 'large'"
            class="app-block app-text-primary app-transition app-duration-300 app-ease-in-out hover:app-opacity-75"
          />
        </NuxtLink>
      </li>
      <li>
        <ul class="app-flex app-items-center app-flex-nowrap">
          <li
            v-for="link in links"
            :key="link.path"
            class="app-mr-20 md:app-mr-initial md:app-ml-40"
          >
            <NuxtLink
              :to="link.to"
              class="app-transition app-duration-300 app-ease-in-out app-label-12-semibold app-block"
              :class="linkClasses(link)"
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
        text: 'About',
        path: '/',
        to: {
          name: 'index'
        }
      },
      {
        text: 'Projects',
        path: '/projects',
        to: {
          name: 'projects'
        }
      },
      {
        text: 'blog',
        path: '/blog',
        to: {
          name: 'blog'
        }
      }
    ]
  }),
  methods: {
    linkClasses (link) {
      return [
        ...{
          true: ['app-text-primary'],
          false: ['app-opacity-50 hover:app-opacity-100']
        }[this.$route.path === link.path]
      ]
    }
  }
}
</script>

<style>

</style>