<template>
  <AppStack
    direction="col"
    align="start"
    :data-name="$NAME"
  >
    <AppHeading
      :size="[24, 36]"
      :text="heading"
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
    <AppButton
      tag="NuxtLink"
      text="View all"
      weight="medium"
      color="2"
      bg="2"
      density="spaced"
      type="framed"
      rounded="32"
      :size="[18, 20]"
      :to="{ name: 'posts' }"
      class="app-mt-20 md:app-mt-44"
    />
  </AppStack>
</template>

<script>
  import AppHeading from '@ryaposov/essentials/AppHeading.vue'
  import AppStack from '@ryaposov/essentials/AppStack.vue'
  import AppButton from '@ryaposov/essentials/AppButton.vue'
  import IndexItemFeature from './IndexItemFeature.vue'

  export default {
    name: 'IndexLastItems',
    components: {
      AppHeading,
      AppStack,
      AppButton,
      IndexItemFeature
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