<template>
  <AppStack
    :data-name="$NAME"
    direction="col"
    class="app-px-16 md:app-px-initial"
  >
    <AppHeading
      :size="[24, 36]"
      text="Text"
      weight="bold"
      color="4"
      class="app-mb-28 md:app-mb-80"
    />
    <AppStack
      :direction="['col', 'row']"
      wrap="wrap"
      class="app--mt-40 md:app--mt-100"
    >
      <AppStack
        v-for="weight in weights"
        :key="weight"
        direction="col"
        class="md:app-w-1/2 md:odd:app-pr-20 md:even:app-pl-20"
      >
        <AppHeading
          :size="[20, 24]"
          :text="weight"
          weight="bold"
          class="app-mb-16 app-mt-40 app-capitalize md:app-mt-100 md:app-mb-20"
        />
        <div class="app-divide-y">
          <AppStack
            v-for="(item, index) in text"
            :key="index"
            direction="col"
            class="app-pt-28 app-pb-28 app-border-border-1 dark:app-border-dborder-1 md:app-pt-40 md:app-pb-40 first:app-pt-0 last:app-pb-0"
          >
            <AppText
              :text="item.text"
              color="4"
              size="16"
              weight="semibold"
            />
            <AppText
              :size="item.size"
              :weight="weight"
              color="1"
              text="Time-to-live The main method for mobile operator to check if your are using other devices through mobile hotspot is TTL value..."
            />
          </AppStack>
        </div>
      </AppStack>
    </AppStack>
  </AppStack>
</template>

<script>
import AppHeading from '@ryaposov/essentials/AppHeading.vue'
import AppText from '@ryaposov/essentials/AppText.vue'
import AppStack from '~/components/AppStack.vue'

export default {
  name: 'DesignSystemText',
  components: {
    AppHeading,
    AppText,
    AppStack
  },
  data: () => ({
    weights: ['bold', 'semibold', 'medium', 'regular'],
    text: [
      {
        size: 20,
        text: '48px / 60px / 700'
      },
      {
        size: 18,
        text: '36px / 56px / 700'
      },
      {
        size: 16,
        text: '32px / 52px / 700'
      },
      {
        size: 14,
        text: '28px / 40px / 700'
      },
    ]
  })
}
</script>
