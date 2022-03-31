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
    <AppStack
      direction="row"
      wrap="wrap"
    >
      <IndexLink
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
        :class="itemClasses(index)"
        class="app-mb-28 app-w-full last:app-mb-initial rp:app-flex-1 rp:app-mr-28 md:app-w-172 md:app-mr-40"
      />
    </AppStack>
  </AppStack>
</template>

<script>
  import AppHeading from '@ryaposov/essentials/AppHeading.vue'
  import AppStack from '~/components/AppStack.vue'
  import IndexLink from './IndexLink.vue'

  export default {
    name: 'IndexJobs',
    components: {
      AppHeading,
      AppStack,
      IndexLink
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
