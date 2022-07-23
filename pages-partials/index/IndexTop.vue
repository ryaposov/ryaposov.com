<template>
  <section
    :data-name="$NAME"
    class="component"
  >
    <AppStack
      direction="row"
      align="center"
    >
      <div class="app-flex-1 md:app-mr-40">
        <AppHeading
          :size="[24, 36]"
          :text="heading"
          weight="extrabold"
          color="3"
          class="app-mb-4 md:app-mb-2"
        />
        <AppHeading
          :size="[24, 32]"
          :html="text"
          weight="bold"
          color="1"
        />
      </div>
    </AppStack>
  </section>
</template>

<script>
  import AppHeading from '@ryaposov/essentials/AppHeading.vue'
  import AppStack from '@ryaposov/essentials/AppStack.vue'
  import AppButton from '@ryaposov/essentials/AppButton.vue'
  import AppDot from '~/components/AppDot.vue'

  export default {
    name: 'IndexTop',
    components: {
      AppHeading,
      AppStack,
      AppButton,
      AppDot
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
      }
    }
  }
</script>

<style scoped>
  .component {
    & >>> a {
      text-decoration: none;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: 3px;
        left: 0;
        width: 100%;
        border-bottom: 2px solid var(--app-aborder-opposite);
        transition: all 300ms ease-in-out;
      }

      &:hover:after {
        border-color: var(--app-aborder-brand);
        transform: translateY(-1px);
      }
    }
  }
</style>
