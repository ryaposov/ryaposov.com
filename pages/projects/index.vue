<template>
  <main :data-name="$NAME">
    <AppStack
      tag="section"
      align="center"
      class="app--mt-60 md:app--mt-96 md:app-h-100vh md:app-min-h-520 md:app-max-h-680"
    >
      <AppContainer
        class="app-px-16 app-mt-120 app-mb-40
        md:app-px-initial md:app-mt-initial md:app-mb-initial"
      >
        <ProjectsTop
          :heading="heading"
          :text="text"
        />
      </AppContainer>
    </AppStack>
    <ProjectsTabs
      v-if="categories.length > 1"
      :tabs="categories"
      :active="activeTab"
      class=""
      @change="activeTab = $event"
    />
    <div
      v-else
      class="app-w-full app-border-b app-border-border-1 dark:app-border-dborder-1 app-opacity-50"
    />
    <AppStack
      tag="section"
      direction="col"
      class="app-px-16 app-py-60 last:app-mb-initial md:app-py-140 md:app-px-initial"
    >
      <AppStack direction="col">
        <ProjectsItem
          v-for="(item, index) in projectsList"
          :key="index"
          v-bind="item"
          class="app-mb-60 last:app-mb-initial md:app-mb-140"
        />
      </AppStack>
    </AppStack>
  </main>
</template>

<script>
import AppContainer from '~/components/AppContainer.vue'
import AppStack from '~/components/AppStack.vue'
import AppHeading from '@ryaposov/essentials/AppHeading.vue'
import ProjectsTop from '~/pages-partials/projects/ProjectsTop.vue'
import ProjectsTabs from '~/pages-partials/projects/ProjectsTabs.vue'
import ProjectsItem from '~/pages-partials/projects/ProjectsItem.vue'

import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

export default {
  name: 'ProjectsPage',
  components: {
    AppStack,
    AppContainer,
    AppHeading,
    ProjectsTop,
    ProjectsTabs,
    ProjectsItem
  },
  asyncData ({ $prismic }) {
    return $prismic.api.query([
      $prismic.predicates.at('document.type', 'project'),
    ], { orderings : '[my.project.order_date desc]', pageSize: 10 })
      .then(projects => ({ projects }))
  },
  data: () => ({
    projects: [],
    heading: 'Projects',
    text: 'Projects I’m honored to be a part of, <br data-m />some things <br data-d />that never reached <br data-m />production, process and practices.',
    activeTab: 'cases',
  }),
  head: {
    title: 'Projects'
  },
  computed: {
    categories () {
      return this.projectsList.reduce((carry, item) => {
        if (carry.find(el => el.value === item.category)) return carry

        carry.push({
          value: item.category,
          label: item.category.charAt(0).toUpperCase() + item.category.slice(1)
        })

        return carry
      }, [])
    },
    projectsList () {
      return [...this.projects.results.map(item => ({
        title: this.$prismic.asText(item.data.title),
        text: this.$prismic.asText(item.data.introtext),
        date: item.data.date,
        image: item.data.list_image,
        tags: item.data.tags,
        category: item.data.category,
        to: {
          name: 'projects-id',
          params: { id: item.uid }
        }
      }))]
    }
  }
}
</script>

<style>

</style>
