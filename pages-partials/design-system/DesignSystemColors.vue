<template>
  <section
    :data-name="$NAME"
    class="app-px-16 md:app-px-initial"
  >
    <AppHeading
      :size="[24, 36]"
      text="Colors"
      weight="bold"
      color="4"
      class="app-mb-28 md:app-mb-80"
    />
    <AppStack :direction="['col', 'row']">
      <AppStack
        v-for="(colorTheme, group) in colorThemes"
        :key="group"
        :class="colorTheme.classes"
        class="app--mx-16 app-px-16 md:app-rounded-40 md:app-py-80 md:app-mx-initial md:app-w-1/2"
        direction="col"
      >
        <AppHeading
          :size="[20, 24]"
          :text="colorTheme.heading"
          :color="false"
          :class="colorTheme.headingClasses"
          weight="bold"
          class="app-mb-20 md:app-mb-28"
        />
        <AppStack :direction="['col', 'row']">
          <div
            v-for="(colorGroup, key) in colorTheme.colors"
            :key="key"
            :class="colorTheme.contentClasses"
            class="app-mb-4 last:app-mb-initial md:app-mb-initial md:app-mr-28 md:last:app-mr-initial"
          >
            <AppHeading
              :key="key + '-heading'"
              :text="key"
              :color="false"
              size="18"
              weight="medium"
              class="app-mb-12 app-capitalize md:app-mb-20"
            />
            <div
              :key="key + '-content'"
              class="app-overflow-x-auto app-overflow-y-hidden app-scrolling-touch app--mx-16 app-pb-16
                md:app-mx-initial md:app-pb-initial"
            >
              <AppStack
                class="app-px-16 md:app-px-initial"
                :direction="['row', 'col']"
              >
                <DesignSystemColor
                  v-for="color in colorGroup"
                  :key="color"
                  :color="color"
                  :class="colorTheme.colorClasses"
                  class="app-flex-shrink-0 app-mr-16 app-border md:app-mr-initial md:app-mb-40 md:last:app-mb-initial"
                />
                <div class="app-flex-shrink-0 app---ml-16 app-w-16 md:app-hidden" />
              </AppStack>
            </div>
          </div>
        </AppStack>
      </AppStack>
    </AppStack>
  </section>
</template>

<script>
import AppHeading from '@ryaposov/essentials/AppHeading.vue'
import AppStack from '~/components/AppStack.vue'
import DesignSystemColor from './DesignSystemColor.vue'

export default {
  name: 'DesignSystemColors',
  components: {
    AppHeading,
    AppStack,
    DesignSystemColor
  },
  data () {
    return {
      cssRootVars: [],
    }
  },
  computed: {
    colors () {
      return this.cssRootVars.filter(
        variable =>
          variable.startsWith('--app-') &&
          (
            variable.includes('text-') ||
            variable.includes('bg-') ||
            variable.includes('border-')
          )
      )
    },
    lightColors () {
      return this.remapColorsToGroups(this.cssRootVars.filter(item => !item.includes('app-d')))
    },
    darkColors () {
      return this.remapColorsToGroups(this.cssRootVars.filter(item => item.includes('app-d')))
    },
    colorThemes () {
      return {
        light: {
          classes: ['app-mb-24', 'md:app-mb-initial', 'md:app-pr-76', 'md:app-pl-initial'],
          headingClasses: ['app-text-text-1'],
          contentClasses: ['app-text-text-3'],
          colorClasses: ['app-border-border-2'],
          heading: 'Light Colors',
          colors: this.lightColors
        },
        dark: {
          classes: ['app-pt-32', 'app-pb-24', 'app-bg-dbg-2', 'md:app-px-76', 'md:app--mr-80', 'md:app-flex-1'],
          headingClasses: ['app-text-dtext-1'],
          contentClasses: ['app-text-dtext-3'],
          colorClasses: ['app-border-dborder-2'],
          heading: 'Dark Colors',
          colors: this.darkColors
        }
      }
    }
  },
  mounted () {
    this.cssRootVars = this.getAllCSSVariableNames()
  },
  methods: {
    getAllCSSVariableNames (styleSheets = document.styleSheets) {
      let cssVars = []

      for (var i = 0; i < styleSheets.length; i++) {
          try {
            for (var j = 0; j < styleSheets[i].cssRules.length; j++) {
                try {
                  for (var k = 0; k < styleSheets[i].cssRules[j].style.length; k++) {
                      let name = styleSheets[i].cssRules[j].style[k]

                      if(name.startsWith('--app') && cssVars.indexOf(name) == -1) {
                        cssVars.push(name)
                      }
                  }
                } catch (error) {

                }
            }
          } catch (error) {

          }
      }

      return cssVars
    },
    remapColorsToGroups (colors) {
      return colors.reduce((a, b) => {
        if (b.includes('-text-') || b.includes('-dtext-')) {
          a.Text.push(b)
        } else if (b.includes('-bg-') || b.includes('-dbg-')) {
          a.BG.push(b)
        } else if (b.includes('-border-') || b.includes('-dborder-')) {
          a.Border.push(b)
        }

        return a
      }, {
        Text: [],
        BG: [],
        Border: []
      })
    }
  }
}
</script>
