<template>
  <div>
    <AppHeading
      :size="[24, 36]"
      text="Other Posts"
      weight="bold"
      color="4"
      class="app-mb-28 md:app-mb-80"
    />
    <AppStack direction="col">
      <IndexItemFeature
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
        class="app-mb-28 last:app-mb-initial md:app-mb-60"
      />
    </AppStack>
  </div>
</template>

<script>
import AppHeading from '@ryaposov/essentials/AppHeading.vue'
import AppStack from '~/components/AppStack.vue'

import IndexItemFeature from '@/pages-partials/index/IndexItemFeature.vue'

export default {
  name: 'PostsIdOther',
  components: {
    AppHeading,
    AppStack,
    IndexItemFeature
  },
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
  },
}
</script>