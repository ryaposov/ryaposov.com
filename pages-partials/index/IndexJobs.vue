<template>
  <AppStack
    direction="col"
    :data-name="$NAME"
  >
    <AppHeading
      :size="[24, 36]"
      :text="heading"
      weight="bold"
      color="1"
      class="app-mb-28 md:app-mb-80"
    />
    <AppGrid
      :columns="['app-grid-cols-1', 'rp:app-grid-cols-2']"
      :gap="['app-gap-28', 'md:app-gap-80']"
      class=""
    >
      <IndexJob
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
        class="md:app-w-360"
      />
    </AppGrid>
  </AppStack>
</template>

<script>
  import AppHeading from '@ryaposov/essentials/AppHeading.vue'
  import AppGrid from '@ryaposov/essentials/AppGrid.vue'
  import AppStack from '@ryaposov/essentials/AppStack.vue'

  import IndexJob from './IndexJob.vue'

  export default {
    name: 'IndexJobs',
    components: {
      AppHeading,
      AppGrid,
      AppStack,
      IndexJob
    },
    props: {
      heading: {
        type: String,
        default: ''
      },
      items: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>
