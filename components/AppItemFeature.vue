<template>
  <AppStack
    :data-name="$NAME"
    direction="col"
  >
    <AppText
      v-if="date"
      :size="[18, 20]"
      :text="date"
      color="3"
      class="app-mb-8"
    />
    <AppHeading
      :size="[20, 24]"
      :text="title"
      color="1"
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
import AppHeading from '~/components/AppHeading.vue'
import AppText from '~/components/AppText.vue'

export default {
  name: 'AppItemFeature',
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