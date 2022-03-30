<template>
  <AppStack
    :data-name="$NAME"
    direction="col"
  >
    <AppContainer class="md:app-mx-auto">
      <AppStack
        :direction="['col', 'row']"
        :justify="['start', 'between']"
        class=""
      >
        <AppStack
          direction="col"
          class=""
        >
          <AppHeading
            :size="[24, 44]"
            :text="title"
            :to="to"
            tag="NuxtLink"
            leading="compact"
            weight="extrabold"
            color="1"
            class="app-mb-4 md:app-mb-8"
          />
          <AppHeading
            :size="[18, 24]"
            :html="text"
            weight="semibold"
            color="3"
            class="app-line-clamp-2"
          />
        </AppStack>
        <AppStack
          :direction="['row', 'col']"
          :align="['start', 'end']"
          :justify="['start', 'end']"
          class="app-mt-8 md:app-mt-initial"
        >
          <AppButton
            :text="date"
            type="framed"
            rounded="32"
            bg="transparent"
            border="2"
            size="16"
            color="1"
            weight="bold"
            class="app-mr-6 last:app-mr-initial md:app-hidden"
          />
          <AppHeading
            :text="date"
            size="20"
            weight="bold"
            color="1"
            class="app-hidden md:app-inline-block"
          />
          <AppStack
            align="center"
            class="md:app-mt-6 md:app-pb-4"
          >
            <AppButton
              v-for="(tag, index) in tags"
              :key="index"
              :text="tag.tag"
              type="framed"
              rounded="32"
              bg="25"
              size="16"
              color="2"
              weight="bold"
              class="app-mr-6 last:app-mr-initial"
            />
          </AppStack>
        </AppStack>
      </AppStack>
    </AppContainer>
    <NuxtLink
      :to="to"
      class="app-block app-mt-20 md:app-mt-40 md:app-mx-auto md:app-w-full md:app-max-w-1520"
    >
      <AppImage2
        v-if="image.url"
        :style="$MD ? { boxShadow: '0px 90px 100px -50px rgba(0, 0, 0, 0.2)' } : { boxShadow: '0px 50px 60px -30px rgba(0, 0, 0, 0.2)' }"
        lazy
        sizing="fixed"
        v-bind="imageProps"
        class="app-rounded-16 app-overflow-hidden app-w-full app-h-480 app-block
          md:app-rounded-40"
      />
    </NuxtLink>
  </AppStack>
</template>

<script>
import AppStack from '@ryaposov/essentials/AppStack.vue'
import AppHeading from '@ryaposov/essentials/AppHeading.vue'
import AppImage2 from '@ryaposov/essentials/AppImage2.vue'
import AppButton from '@ryaposov/essentials/AppButton.vue'

import AppContainer from '~/components/AppContainer.vue'

export default {
  name: 'ProjectsItem',
  components: {
    AppStack,
    AppHeading,
    AppImage2,
    AppButton,
    AppContainer
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
        desktop: `${this.image.desktop_landscape.url}&dpr=1 1x,
          ${this.image.desktop_landscape.url}&dpr=2 2x,
          ${this.image.desktop_landscape.url}&dpr=3 3x`,
        mobile: `${this.image.mobile_portrait.url}&dpr=1 1x,
          ${this.image.mobile_portrait.url}&dpr=2 2x,
          ${this.image.mobile_portrait.url}&dpr=3 3x`,
        src: this.$buildImgUrl(this.image.url, { w: 400, h: 480, fit: 'crop' })
      }
    }
  }
}
</script>
