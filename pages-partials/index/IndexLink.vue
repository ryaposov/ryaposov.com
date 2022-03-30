<template>
  <AppStack
    :data-name="$NAME"
    direction="col"
  >
    <AppHeading
      :size="[20, 24]"
      :text="title"
      color="1"
      href=""
    />
    <AppHeading
      :size="[18, 20]"
      :text="text"
      color="3"
      weight="semibold"
      v-bind="href ? {
        href,
        tag: 'a',
        target: '_blank',
        class: ['app-transition', 'app-duration-150', 'app-ease-in-out', 'hover:app-opacity-50']
      } : {}"
      class="app-mt-4 md:app-mt-12"
    />
  </AppStack>
</template>

<script>
import AppStack from '~/components/AppStack.vue'
import AppDot from '~/components/AppDot.vue'
import AppHeading from '@ryaposov/essentials/AppHeading.vue'

export default {
  name: 'IndexLink',
  components: {
    AppStack,
    AppDot,
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
    },
    href: {
      type: String,
      default: ''
    }
  }
}
</script>
