<template>
  <AppStack
    :data-name="$NAME"
    direction="col"
  >
    <AppText
      v-if="date"
      :size="[18, 20]"
      :text="date"
      weight="semibold"
      color="3"
      class="app-mb-4"
    />
    <AppHeading
      :size="[20, 24]"
      :text="title"
      :to="to"
      tag="NuxtLink"
      color="1"
      class="app-mb-10 md:app-mb-8"
    />
    <AppText
      :size="[18, 20]"
      :text="text"
      weight="semibold"
      color="3"
      class="app-line-clamp-4 md:app-line-clamp-2"
    />
  </AppStack>
</template>

<script>
import AppStack from '~/components/AppStack.vue'
import AppHeading from '@ryaposov/essentials/AppHeading.vue'
import AppText from '@ryaposov/essentials/AppText.vue'

export default {
  name: 'IndexPost',
  components: {
    AppStack,
    AppHeading,
    AppText
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    date: {
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
