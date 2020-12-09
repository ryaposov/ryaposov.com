<template>
  <AppStack direction="col">
    <AppStack
      align="center"
      class="app-mb-20 md:app-mb-28"
    >
      <AppButton
        :to="{ name: 'posts' }"
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
      tag="h1"
      :text="heading"
      :size="[24, 48]"
      :weight="['bold', 'extrabold']"
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