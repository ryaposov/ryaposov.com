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
      <AppItemFeature
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
        class="app-mb-20 last:app-mb-initial md:app-mb-60"
      />
    </AppStack>
    <AppButton
      text="View all"
      weight="medium"
      color="2"
      bg="2"
      type="framed"
      rounded="32"
      :size="[18, 20]"
      class="app-mt-20 md:app-mt-52"
    />
  </AppStack>
</template>

<script>
  import AppHeading from '~/components/AppHeading.vue'
  import AppStack from '~/components/AppStack.vue'
  import AppButton from '~/components/AppButton.vue'
  import AppItemFeature from '~/components/AppItemFeature.vue'

  export default {
    name: 'IndexLastItems',
    components: {
      AppHeading,
      AppStack,
      AppButton,
      AppItemFeature
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