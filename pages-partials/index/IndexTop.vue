<template>
  <section :data-name="$NAME">
    <AppStack
      direction="row"
      align="center"
    >
      <div class="app-flex-1">
        <AppHeading
          :size="[24, 36]"
          :text="heading"
          weight="bold"
          color="brand"
          class="app-mb-8 md:app-mb-20"
        />
        <AppHeading
          :size="[20, 24]"
          :html="text"
          weight="semibold"
          color="1"
        />
        <AppHeading
          :size="[20, 24]"
          weight="semibold"
          color="3"
          class="app-mt-12 md:app-mt-20"
        >
          {{ email }}
          <AppDot
            color="gray"
            class="app-mx-16"
          />
          {{ twitter }}
        </AppHeading>
      </div>
      <AppImage
        v-if="$MD"
        id="vnax8x.jpg"
        :resolutions="[1, 2, 3]"
        :size="[188, 188]"
        class="index-top__image app-rounded-full app-pointer-events-none"
      />
    </AppStack>
  </section>
</template>

<script>
  import AppHeading from '~/components/AppHeading.vue'
  import AppStack from '~/components/AppStack.vue'
  import AppDot from '~/components/AppDot.vue'
  import AppImage from '~/components/AppImage.vue'

  export default {
    name: 'IndexTop',
    components: {
      AppHeading,
      AppStack,
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
      email: {
        type: String,
        default: ''
      },
      twitter: {
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
      box-shadow: 0px 0px 250px rgba(255, 255, 255, 0.15);
    }
  }
</style>