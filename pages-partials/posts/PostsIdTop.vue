<template>
  <AppStack direction="col">
    <AppStack
      align="center"
      class="app-mb-20 md:app-mb-28"
    >
      <AppButton
        :to="{ name: 'index' }"
        tag="NuxtLink"
        text="< Back to articles"
        size="18"
        color="brand"
        type="underlined"
      />
      <AppDot class="app-mx-16" />
      <AppText
        :text="date"
        size="18"
        color="3"
      />
    </AppStack>
    <AppHeading
      :text="heading"
      :size="[24, 48]"
      :weight="['bold', 'extrabold']"
    />
  </AppStack>
</template>

<script>
import AppDot from '@/components/AppDot.vue'
import AppStack from '@/components/AppStack.vue'
import AppHeading from '@/components/AppHeading.vue'
import AppText from '@/components/AppText.vue'
import AppButton from '@/components/AppButton.vue'

export default {
  name: 'PostsIdTop',
  components: {
    AppDot,
    AppStack,
    AppHeading,
    AppText,
    AppButton
  },
  props: {
    link: {
      type: Object,
      default: () => ({ name: 'index' })
    },
    heading: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
}
</script>