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
      class="app-mt-8 md:app-mt-12"
    />
  </AppStack>
</template>

<script>
import AppStack from '~/components/AppStack.vue'
import AppDot from '~/components/AppDot.vue'
import AppHeading from '~/components/AppHeading.vue'
import AppText from '~/components/AppText.vue'

export default {
  name: 'IndexItemFeat',
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
    }
  }
}
</script>