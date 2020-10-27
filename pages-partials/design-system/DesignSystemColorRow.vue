<template>
  <div>
    <AppHeading
      size="18"
      :text="heading"
      weight="medium"
      color="3"
      class="app-mb-12 app-capitalize md:app-mb-20"
    />
    <div class="app-overflow-x-auto app-overflow-y-hidden app-scrolling-touch app--mx-16 app-pb-16 md:app-mx-initial">
      <AppStack class="app-px-16">
        <DesignSystemColor
          v-for="color in colors"
          :key="color"
          :color="color"
          class="app-flex-shrink-0 app-mr-16"
        />
        <div class="app-flex-shrink-0 app---ml-16 app-w-16" />
      </AppStack>
    </div>
  </div>  
</template>

<script>
import AppHeading from '@ryaposov/essentials/AppHeading.vue'
import AppStack from '~/components/AppStack.vue'
import DesignSystemColor from './DesignSystemColor.vue'

export default {
  name: 'DesignSystemColorRow',
  components: {
    AppHeading,
    AppStack,
    DesignSystemColor
  },
  props: {
    heading: {
      type: String,
      default: ''
    },
    colors: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>