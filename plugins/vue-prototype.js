import Vue from 'vue'
import { mapGetters } from 'vuex'

export default ({ req, app }) => {
  Vue.mixin({
    computed: {
      ...mapGetters('app', {
        $MD: 'isMdBreakpoint',
        $XS: 'isSmBreakpoint',
      })
    }
  })
}