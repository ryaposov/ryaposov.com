<template>
  <AppStack
    :data-name="$NAME"
    direction="col"
  >
    <AppStack align="center">
      <AppHeading
        :size="[20, 24]"
        :text="title"
        color="1"
        href=""
      />
      <template v-if="subtitle">
        <AppDot class="app-mx-12" />
        <AppText
          :size="[16, 18]"
          :text="subtitle"
          weight="semibold"
          color="2"
        />
      </template>
    </AppStack>
    <AppText
      :size="[18, 20]"
      :text="text"
      color="3"
      v-bind="href ? {
        href,
        tag: 'a',
        target: '_blank',
        class: ['app-transition', 'app-duration-150', 'app-ease-in-out', 'hover:app-opacity-50']
      } : {}"
      class="app-mt-8 md:app-mt-12"
    />
  </AppStack>
</template>

<script>
import AppStack from '~/components/AppStack.vue'
import AppDot from '~/components/AppDot.vue'
import AppHeading from '@ryaposov/essentials/AppHeading.vue'
import AppText from '@ryaposov/essentials/AppText.vue'

export default {
  name: 'IndexItemLink',
  components: {
    AppStack,
    AppDot,
    AppHeading,
    AppText
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