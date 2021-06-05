<template>
  <section :data-name="$NAME">
    <AppStack
      direction="row"
      align="center"
    >
      <div class="app-flex-1 md:app-mr-40">
        <AppHeading
          :size="[24, 48]"
          :text="heading"
          :weight="['bold', 'extrabold']"
          color="brand"
          class="app-mb-8 md:app-mb-20"
        />
        <AppHeading
          :size="[20, 28]"
          :html="text"
          weight="semibold"
          color="1"
        />
        <AppStack
          align="center"
          class="app-mt-12 md:app-mt-20"
        >
          <template v-for="(link, index) in links">
            <AppButton
              :key="link.url"
              :size="[20, 28]"
              :text="link.text"
              :href="link.url"
              weight="semibold"
              color="3"
              type="underlined"
              text-tag="AppHeading"
              target="_blank"
              rel="noopener"
            />
            <AppDot
              v-if="index < (links.length - 1)"
              :key="link.url + '-dot'"
              color="gray"
              class="app-mx-16"
            />
          </template>
        </AppStack>
      </div>
      <div
        v-if="imageId"
        class="app-hidden md:app-block app-w-220"
      >
        <AppImage
          v-if="imageId && $MD"
          :id="imageId"
          :resolutions="[1, 2, 3]"
          :size="[240, 240]"
          class="index-top__image app-rounded-full app-pointer-events-none"
        />
      </div>
    </AppStack>
  </section>
</template>

<script>
  import AppHeading from '@ryaposov/essentials/AppHeading.vue'
  import AppStack from '@ryaposov/essentials/AppStack.vue'
  import AppButton from '@ryaposov/essentials/AppButton.vue'
  import AppImage from '@ryaposov/essentials/AppImage.vue'
  import AppDot from '~/components/AppDot.vue'

  export default {
    name: 'IndexTop',
    components: {
      AppHeading,
      AppStack,
      AppButton,
      AppDot,
      AppImage
    },
    props: {
      heading: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      links: {
        type: Array,
        default: () => ([])
      },
      imageId: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style>
  .index-top__image {
    @media (--md) {
      box-shadow: 0px 0px 250px rgba(0, 0, 0, 0.25);
    }

    @media (--md) and (--dark) {
      box-shadow: 0px 0px 250px rgba(255, 255, 255, 0.10);
    }
  }
</style>