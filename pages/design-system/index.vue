<template>
  <main :data-name="$NAME">
    <AppStack
      align="center"
      class="md:app--mt-96 md:app-h-100vh md:app-min-h-520 md:app-max-h-680"
    >
      <AppContainer
        class="app-px-16 app-mt-60 app-mb-40
        md:app-px-initial md:app-mt-initial md:app-mb-initial"
      >
        <DesignSystemTop
          v-bind="topProps"
        />
      </AppContainer>
    </AppStack>
    <AppBorder />
    <AppContainer
      class="app-py-40 md:app-py-160"
    >
      <DesignSystemColors />
    </AppContainer>
    <AppBorder />
    <AppContainer
      class="app-py-40 md:app-py-160"
    >
      <DesignSystemHeadings />
    </AppContainer>
    <AppBorder />
    <AppContainer
      class="app-py-40 md:app-py-160"
    >
      <DesignSystemText />
    </AppContainer>
  </main>
</template>

<script>
import AppContainer from '~/components/AppContainer.vue'
import AppStack from '~/components/AppStack.vue'
import AppBorder from '~/components/AppBorder.vue'
import DesignSystemTop from '~/pages-partials/design-system/DesignSystemTop.vue'
import DesignSystemColors from '~/pages-partials/design-system/DesignSystemColors.vue'
import DesignSystemHeadings from '~/pages-partials/design-system/DesignSystemHeadings.vue'
import DesignSystemText from '~/pages-partials/design-system/DesignSystemText.vue'

export default {
  name: 'DesignSystemPage',
  components: {
    AppContainer,
    AppStack,
    AppBorder,
    DesignSystemTop,
    DesignSystemColors,
    DesignSystemHeadings,
    DesignSystemText
  },
  asyncData ({ $prismic }) {
    return $prismic.api.getSingle('design-system')
      .then(designSystem => ({ designSystem }))
  },
  data: () => ({
    designSystem: {}
  }),
  computed: {
    topProps () {
      return {
        heading: this.$prismic.asText(this.designSystem.data.heading),
        text: this.$prismic.asText(this.designSystem.data.text)
      }
    }
  }
}
</script>
