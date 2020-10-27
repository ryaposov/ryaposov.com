<template>
  <AppStack
    direction="col"
    :data-name="$NAME"
    class="app-px-16 md:app-px-initial"
  >
    <AppHeading
      :size="[24, 36]"
      text="Headings"
      weight="bold"
      color="4"
      class="app-mb-28 md:app-mb-80"
    />
    <div class="app-divide-y">
      <div
        v-for="(item, index) in headings"
        :key="index"
        class="app-pt-28 app-pb-28 app-border-1 first:app-pt-0 last:app-pb-0"
      >
        <AppText
          color="4"
          size="16"
          weight="semibold"
          :text="item.text"
        />
        <AppHeading
          :size="item.size"
          :text="item.heading"
          weight="bold"
        />
      </div>
    </div>
  </AppStack>
</template>

<script>
import AppHeading from '@ryaposov/essentials/AppHeading.vue'
import AppText from '@ryaposov/essentials/AppText.vue'
import AppStack from '~/components/AppStack.vue'

export default {
  name: 'DesignSystemHeadings',
  components: {
    AppHeading,
    AppText,
    AppStack
  },
  data: () => ({
    headings: [
      {
        size: 48,
        text: '48px / 60px / 700',
        heading: 'Coronavirus: Baltic states open a pandemic \'travel bubble\'',
      },
      {
        size: 36,
        text: '36px / 56px / 700',
        heading: 'Bundesliga coach breaks quarantine rules',
      },
      {
        size: 32,
        text: '32px / 52px / 700',
        heading: 'Sanofi\'s logo at its headquarters in Paris',
      },
      {
        size: 28,
        text: '28px / 40px / 700',
        heading: 'French drug giant rows back after vaccine storm',
      },
      {
        size: 24,
        text: '24px / 36px / 700',
        heading: 'UK urges EU to uphold rights of British expats',
      },
      {
        size: 20,
        text: '20px / 32px / 700',
        heading: 'Migrants at Hungary border fence, 2015 file pic',
      },
      {
        size: 18,
        text: '18px / 28px / 700',
        heading: 'EU court censures Hungary over migrant detentions',
      },
      {
        size: 16,
        text: '16px / 24px / 700',
        heading: 'How is lockdown being lifted across Europe?'
      }
    ]
  })
}
</script>