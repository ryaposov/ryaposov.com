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
        class="app--mx-16 app-px-16 md:app-py-80 md:app-mx-initial md:app-w-1/2"
        direction="col"
      >
        <AppHeading
          :size="[20, 24]"
          :text="colorTheme.heading"
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
              size="18"
              :text="key"
              weight="medium"
              color="3"
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
                  class="app-flex-shrink-0 app-mr-16 md:app-mr-initial md:app-mb-40 md:last:app-mb-initial"
                />
                <div
                  v-if="!$MD"
                  lass="app-flex-shrink-0 app---ml-16 app-w-16"
                />
              </AppStack>
            </div>
          </div>
        </AppStack>
      </AppStack>
    </AppStack>
  </section>
</template>

<script>
import AppHeading from '~/components/AppHeading.vue'
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
            variable.includes('-text-') || 
            variable.includes('-bg-') || 
            variable.includes('-border-')
          )
      )
    },
    lightColors () {
      return this.remapColorsToGroups(this.cssRootVars.filter(item => item.includes('-light')))
    },
    darkColors () {
      return this.remapColorsToGroups(this.cssRootVars.filter(item => item.includes('-dark')))
    },
    colorThemes () {
      return {
        light: {
          classes: ['app-mb-24', 'md:app-mb-initial', 'md:app-pr-76', 'md:app-pl-initial'],
          headingClasses: [],
          contentClasses: [],
          colorClasses: ['app-border-1'],
          heading: 'Light Colors',
          colors: this.lightColors
        },
        dark: {
          classes: ['app-pt-32', 'app-pb-24', 'app-bg-2-dark', 'md:app-px-76', 'md:app--mr-80', 'md:app-flex-1'],
          headingClasses: ['app-text-1-dark'],
          contentClasses: ['app-text-3-dark'],
          colorClasses: ['app-border-1-dark'],
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

                      if(name.startsWith('--') && cssVars.indexOf(name) == -1) {
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
        if (b.includes('-text-')) {
          a.Text.push(b)
        } else if (b.includes('-bg-')) {
          a.BG.push(b)
        } else if (b.includes('-border-')) {
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