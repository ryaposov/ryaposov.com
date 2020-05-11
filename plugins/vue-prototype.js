import Vue from 'vue'
import { mapGetters } from 'vuex'
import VueClassDirective from '~/helpers/class'

export default ({ req, app }) => {
  Vue.directive('class', VueClassDirective(app.store))
  Vue.mixin({
    computed: {
      ...mapGetters('app', {
        $MD: 'isMdBreakpoint',
        $XS: 'isSmBreakpoint',
      })
    }
  })
}