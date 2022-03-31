<template>
  <AppStack
    :data-name="$NAME"
    direction="col"
  >
    <AppStack
      direction="col"
    >
      <AppHeading
        :size="[20, 24]"
        :text="title"
        :to="to"
        weight="extrabold"
        color="1"
        class="app-mb-4"
      />
      <AppHeading
        :size="[18, 20]"
        :html="text"
        weight="semibold"
        color="3"
        class="app-line-clamp-2"
      />
      <AppStack class="app-mt-8">
        <AppButton
          :text="date"
          type="framed"
          rounded="32"
          bg="transparent"
          border="2"
          size="14"
          color="1"
          weight="bold"
          class="app-mr-6 last:app-mr-initial"
        />
        <AppButton
          v-for="(tag, index) in tags"
          :key="index"
          :text="tag.tag"
          type="framed"
          rounded="32"
          bg="25"
          size="14"
          color="2"
          weight="bold"
          class="app-mr-6 last:app-mr-initial"
        />
      </AppStack>
    </AppStack>
    <!-- <NuxtLink
      :to="to"
      class="app-block app-mt-16 md:app-mt-24"
    > -->
    <div
      class="app-block app-mt-16 md:app-mt-24"
    >
      <AppImage2
        v-if="image.url"
        :style="{ boxShadow: '0px 50px 60px -30px rgba(0, 0, 0, 0.2)' }"
        lazy
        sizing="fixed"
        v-bind="imageProps"
        class="app-rounded-16 app-overflow-hidden app-w-full app-h-480 app-block"
      />
    </div>
  </AppStack>
</template>

<script>
import AppStack from '@ryaposov/essentials/AppStack.vue'
import AppHeading from '@ryaposov/essentials/AppHeading.vue'
import AppImage2 from '@ryaposov/essentials/AppImage2.vue'
import AppButton from '@ryaposov/essentials/AppButton.vue'

export default {
  name: 'IndexProject',
  components: {
    AppStack,
    AppHeading,
    AppImage2,
    AppButton
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    image: {
      type: Object,
      default: () => ({})
    },
    tags: {
      type: Array,
      default: () => ([])
    },
    to: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    imageProps () {
      return {
        desktop: `${this.image.desktop_portrait.url}&dpr=1 1x,
          ${this.image.desktop_portrait.url}&dpr=2 2x,
          ${this.image.desktop_portrait.url}&dpr=3 3x`,
        mobile: `${this.image.mobile_landscape.url}&dpr=1 1x,
          ${this.image.mobile_landscape.url}&dpr=2 2x,
          ${this.image.mobile_landscape.url}&dpr=3 3x`,
        src: this.$buildImgUrl(this.image.url, { w: 400, h: 480, fit: 'crop' })
      }
    }
  }
}
</script>
