<template>
  <AppStack
    :data-name="$NAME"
    direction="col"
  >
    <AppText
      v-if="date"
      color="3"
      :size="[18, 20]"
      :text="date"
      class="app-mb-8"
    />
    <AppHeading
      color="1"
      tag="NuxtLink"
      :size="[20, 24]"
      :text="title"
      :to="to"
      class="app-mb-8"
    />
    <AppText
      :size="[18, 20]"
      :text="text"
      color="3"
    />
  </AppStack>
</template>

<script>
import AppStack from '~/components/AppStack.vue'
import AppHeading from '@ryaposov/essentials/AppHeading.vue'
import AppText from '@ryaposov/essentials/AppText.vue'

export default {
  name: 'IndexItemFeature',
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