<template>
  <section
    :data-name="$NAME"
    class=""
  >
    <AppHeading
      :size="[24, 48]"
      :text="heading"
      weight="extrabold"
    />
    <AppHeading
      v-if="text"
      :size="[20, 28]"
      :html="text"
      weight="semibold"
      color="3"
      class="app-mt-8 md:app-mt-20"
    />
  </section>
</template>

<script>
import AppHeading from '@ryaposov/essentials/AppHeading.vue'

export default {
  name: 'DesignSystemTop',
  components: {
    AppHeading
  },
  props: {
    heading: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
