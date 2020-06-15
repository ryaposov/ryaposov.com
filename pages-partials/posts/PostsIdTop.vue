<template>
  <AppStack>
    PostsIdTop
  </AppStack>
</template>

<script>
import AppStack from '@/components/AppStack.vue'

export default {
  name: 'PostsIdTop',
  components: {
    AppStack
  },
  props: {
    link: {
      type: Object,
      default: () => ({ name: 'index' })
    },
    date: {
      type: String,
      default: ''
    }
  }
}
</script>