<template>
  <AppStack
    :data-name="$NAME"
    direction="col"
  >
    <AppStack
      direction="col"
      class=""
    >
      <AppHeading
        :size="[20, 24]"
        :text="title"
        weight="bold"
        color="1"
      />
      <AppHeading
        v-if="subtitle"
        :size="[18, 20]"
        :text="subtitle"
        weight="semibold"
        color="1"
      />
    </AppStack>
    <AppHeading
      :size="[18, 20]"
      :html="text"
      weight="semibold"
      color="3"
      class="app-mt-8 md:app-mt-12"
    />
  </AppStack>
</template>

<script>
import AppStack from '~/components/AppStack.vue'
import AppHeading from '@ryaposov/essentials/AppHeading.vue'

export default {
  name: 'IndexJob',
  components: {
    AppStack,
    AppHeading
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
