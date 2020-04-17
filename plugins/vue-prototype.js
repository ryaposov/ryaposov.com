import Vue from 'vue'
import { mapGetters } from 'vuex'

Vue.mixin({
  computed: {
    ...mapGetters('app', {
      $MD: 'isMdBreakpoint',
      $XS: 'isSmBreakpoint',
    })
  }
})