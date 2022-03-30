<template>
  <div
    :data-name="$NAME"
    class="app-relative"
  >
    <div class="app-absolute app-bottom-0 app-w-full app-border-b app-border-border-2 dark:app-border-dborder-2 app-opacity-50" />
    <AppContainer class="app-relative app-px-16 md:app-px-initial">
      <AppStack
        align="center"
        class=""
      >
        <AppStack
          v-for="(tab, index) in tabs"
          :key="index"
          class="app-cursor-pointer app-mr-24 app-pb-6 app-relative last:app-mr-initial md:app-mr-40"
          @click.native="$emit('change', tab.value)"
        >
          <AppHeading
            :size="[18, 24]"
            :text="tab.label"
            :weight="tab.value === active ? 'extrabold' : 'semibold'"
            :color="tab.value === active ? '1' : '3'"
            class="app-text-center"
          />
          <div
            :class="tab.value === active ? ['app-opacity-1'] : ['app-opacity-0']"
            class="app-absolute app--bottom-1 app-w-full app-border-b-2 app-border-border-brand dark:app-border-dborder-brand
              app-transition-opacity app-duration-150 app-ease-out"
          />
        </AppStack>
      </AppStack>
    </AppContainer>
  </div>
</template>

<script>
import AppStack from '@ryaposov/essentials/AppStack.vue'
import AppHeading from '@ryaposov/essentials/AppHeading.vue'
import AppBorder from '@ryaposov/essentials/AppBorder.vue'

import AppContainer from '~/components/AppContainer.vue'

export default {
  name: 'ProjectsTabs',
  components: {
    AppStack,
    AppHeading,
    AppBorder,
    AppContainer
  },
  props: {
    tabs: {
      type: Array,
      default: () => ([])
    },
    active: {
      type: String,
      default: ''
    }
  }
}
</script>
