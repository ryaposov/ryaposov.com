<template>
  <AppStack
    direction="col"
    :data-name="$NAME"
  >
    <AppHeading
      :size="[24, 36]"
      :text="heading"
      weight="bold"
      color="4"
      class="app-mb-28 md:app-mb-80"
    />
    <AppStack
      wrap="wrap"
      class="app--mb-20 md:app--mb-60"
    >
      <IndexItemFeat
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
        class="app-mb-20 md:app-w-360 md:app-mr-80 md:app-mb-60"
      />
    </AppStack>
  </AppStack>
</template>

<script>
  import AppHeading from '@ryaposov/essentials/AppHeading.vue'
  import AppStack from '~/components/AppStack.vue'
  import IndexItemFeat from './IndexItemFeat.vue'

  export default {
    name: 'IndexJobs',
    components: {
      AppHeading,
      AppStack,
      IndexItemFeat
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
