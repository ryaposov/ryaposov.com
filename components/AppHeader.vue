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
              :text="link.text"
              :class="linkClasses(link)"
              weight="semibold"
              v-bind="link.to
                ? {
                  to: link.to,
                  tag: 'NuxtLink'
                }
                : {
                  href: link.href,
                  tag: 'a',
                  target: '_blank'
                }"
            />
          </li>
        </AppStack>
      </li>
    </AppStack>
  </nav>
</template>

<script>
import AppHeading from '@ryaposov/essentials/AppHeading.vue'
import AppStack from '~/components/AppStack.vue'

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
        text: 'Posts',
        path: '/posts',
        to: {
          name: 'posts'
        }
      },
      // {
      //   text: 'Github',
      //   href: 'https://github.com/ryaposov'
      // },
      {
        text: 'Dribbble',
        href: 'https://dribbble.com/ryaposov'
      },
      // {
      //   text: 'Projects',
      //   path: '/projects',
      //   to: {
      //     name: 'projects'
      //   }
      // }
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