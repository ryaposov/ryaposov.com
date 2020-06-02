<template>
  <nav
    class="app-p-16 md:app-p-32"
    :data-name="$NAME"
  >
    <AppStack
      tag="ul"
      align="center"
      justify="between"
    >
      <li>
        <AppHeading
          :size="[18, 20]"
          :to="{ name: 'index' }"
          :color="[1, 3]"
          tag="NuxtLink"
          weight="bold"
          text="Pavel Ryaposov"
        />
      </li>
      <li>
        <AppStack
          tag="ul"
          align="center"
          class="app-mt-2"
        >
          <li
            v-for="link in links"
            :key="link.path"
            class="app-mr-16 last:app-mr-initial md:app-mr-32"
          >
            <AppHeading
              size="16"
              :to="link.to"
              :text="link.text"
              :class="linkClasses(link)"
              tag="NuxtLink"
              weight="semibold"
            />
          </li>
        </AppStack>
      </li>
    </AppStack>
  </nav>
</template>

<script>
import AppHeading from './AppHeading.vue'
import AppStack from './AppStack.vue'

export default {
  name: 'AppHeader',
  components: {
    AppHeading,
    AppStack
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
      // {
      //   text: 'Design System',
      //   path: '/design-system',
      //   to: {
      //     name: 'design-system'
      //   }
      // },
      {
        text: 'Projects',
        path: '/projects',
        to: {
          name: 'projects'
        }
      },
      {
        text: 'Posts',
        path: '/posts',
        to: {
          name: 'posts'
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