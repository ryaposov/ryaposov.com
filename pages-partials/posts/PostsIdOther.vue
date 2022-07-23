<template>
  <div>
    <AppHeading
      :size="[24, 36]"
      text="Other Posts"
      weight="bold"
      color="1"
      class="app-mb-28 md:app-mb-80"
    />
    <AppStack direction="col">
      <IndexPost
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

import IndexPost from '@/pages-partials/index/IndexPost.vue'

export default {
  name: 'PostsIdOther',
  components: {
    AppHeading,
    AppStack,
    IndexPost
  },
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
  },
}
</script>
