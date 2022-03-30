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
    <AppButton
      :density="['normal', 'spaced']"
      :size="[18, 20]"
      :to="{ name: 'posts' }"
      tag="NuxtLink"
      text="View all posts"
      weight="bold"
      color="opposite"
      bg="opposite"
      type="framed"
      rounded="32"
      class="app-mt-28 md:app-mt-60"
    />
  </AppStack>
</template>

<script>
  import AppHeading from '@ryaposov/essentials/AppHeading.vue'
  import AppStack from '@ryaposov/essentials/AppStack.vue'
  import AppButton from '@ryaposov/essentials/AppButton.vue'
  import IndexPost from './IndexPost.vue'

  export default {
    name: 'IndexPosts',
    components: {
      AppHeading,
      AppStack,
      AppButton,
      IndexPost
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
