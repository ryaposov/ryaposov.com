<template>
  <AppStack
    align="center"
    justify="center"
    direction="col"
    class="app-h-full app-text-center"
  >
    <AppHeading
      :size="[28, 44]"
      text="Oops. Page in progress"
      class=""
    />
    <AppHeading
      :size="[18, 20]"
      :html="`This page is under development. <br>To be launched in April 2022.`"
      weight="semibold"
      color="3"
      class="app-mt-8 md:app-mt-8"
    />
    <AppButton
      :size="[18, 20]"
      :to="{ name: 'index' }"
      tag="NuxtLink"
      type="framed"
      bg="opposite"
      color="opposite"
      rounded="32"
      text="Take me home"
      class="app-mt-20 md:app-mt-28"
    />
  </AppStack>
</template>

<script>
import AppStack from '@ryaposov/essentials/AppStack.vue'
import AppHeading from '@ryaposov/essentials/AppHeading.vue'
import AppButton from '@ryaposov/essentials/AppButton.vue'

export default {
  name: 'ProjectsIdPage',
  components: {
    AppStack,
    AppHeading,
    AppButton
  },
  head: {
    title: 'Page in progress'
  },
  layout: 'empty'
}
</script>
