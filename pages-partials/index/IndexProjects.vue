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
    <AppGrid
      :columns="['app-grid-cols-1', 'md:app-grid-cols-2']"
      :gap="['app-gap-36', 'md:app-gap-80']"
      class=""
    >
      <IndexProject
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
        class=""
      />
    </AppGrid>
    <AppButton
      :density="['normal', 'spaced']"
      :size="[18, 20]"
      :to="{ name: 'projects' }"
      tag="NuxtLink"
      text="View all projects"
      weight="bold"
      color="opposite"
      bg="opposite"
      type="framed"
      rounded="32"
      class="app-mt-36 md:app-mt-80"
    />
  </AppStack>
</template>

<script>
  import AppHeading from '@ryaposov/essentials/AppHeading.vue'
  import AppStack from '@ryaposov/essentials/AppStack.vue'
  import AppGrid from '@ryaposov/essentials/AppGrid.vue'
  import AppButton from '@ryaposov/essentials/AppButton.vue'
  import IndexProject from './IndexProject.vue'

  export default {
    name: 'IndexProjects',
    components: {
      AppHeading,
      AppStack,
      AppGrid,
      AppButton,
      IndexProject
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
