<template>
  <AppStack
    align="center"
    justify="center"
    direction="col"
    class="app-h-full"
  >
    <AppHeading
      :text="error.statusCode === 404 ? 'Page not found' : 'An error occurred'"
      :size="[24, 44]"
      class=""
    />
    <AppButton
      :size="[18, 20]"
      :to="{ name: 'index' }"
      tag="NuxtLink"
      type="framed"
      bg="opposite"
      color="opposite"
      rounded="32"
      text="Home"
      class="app-mt-20 md:app-mt-28"
    />
  </AppStack>
</template>

<script>
  import AppStack from '@ryaposov/essentials/AppStack.vue'
  import AppHeading from '@ryaposov/essentials/AppHeading.vue'
  import AppButton from '@ryaposov/essentials/AppButton.vue'

  export default {
    components: {
      AppStack,
      AppHeading,
      AppButton
    },
    head: {
      title: 'Error'
    },
    props: ['error'],
    layout: 'empty'
  }
</script>

<style>
  body,
  html,
  #__nuxt,
  #__layout {
    height: 100%;
  }
</style>

