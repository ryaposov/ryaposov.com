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
      :direction="$MD ? 'row' : 'col'"
      wrap="wrap"
    >
      <IndexItemLink
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
        :class="itemClasses(index)"
        class="app-mb-28 last:app-mb-initial md:app-w-172 md:app-mr-40"
      />
    </AppStack>
  </AppStack>
</template>

<script>
  import AppHeading from '@ryaposov/essentials/AppHeading.vue'
  import AppStack from '~/components/AppStack.vue'
  import IndexItemLink from './IndexItemLink.vue'

  export default {
    name: 'IndexJobs',
    components: {
      AppHeading,
      AppStack,
      IndexItemLink
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