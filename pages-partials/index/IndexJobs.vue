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
    <AppStack wrap="wrap">
      <IndexItemFeat
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
        :class="itemClasses(index)"
        class="app-mb-20 last:app-mb-initial md:app-w-340 md:app-mr-40"
      />
    </AppStack>
  </AppStack>
</template>

<script>
  import AppHeading from '~/components/AppHeading.vue'
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
    },
    methods: {
      itemClasses (index) {
        return {
          ['md:app-mb-0']: index > 1,
          ['md:app-mb-60']: index <= 1,
        }
      }
    }
  }
</script>