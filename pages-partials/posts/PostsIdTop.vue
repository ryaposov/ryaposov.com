<template>
  <AppStack direction="col">
    <AppStack
      align="center"
      class="app-mb-12 md:app-mb-28"
    >
      <AppButton
        :to="{ name: 'posts' }"
        tag="NuxtLink"
        text="Back to articles"
        size="18"
        color="brand"
        type="underlined"
      />
      <AppText
        :text="date"
        size="18"
        weight="medium"
        color="3"
        class="app-ml-16"
      />
    </AppStack>
    <AppHeading
      tag="h1"
      :text="heading"
      :size="[24, 48]"
      :weight="['bold', 'extrabold']"
      :leading="['regular', 'compact']"
    />
  </AppStack>
</template>

<script>
import AppStack from '@ryaposov/essentials/AppStack.vue'
import AppHeading from '@ryaposov/essentials/AppHeading.vue'
import AppText from '@ryaposov/essentials/AppText.vue'
import AppButton from '@ryaposov/essentials/AppButton.vue'
import AppDot from '~/components/AppDot.vue'

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
