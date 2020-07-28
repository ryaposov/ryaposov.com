import Vue from 'vue'
import { mapGetters } from 'vuex'
import VueClassDirective from '~/helpers/class'
import VueCodeHighlight from 'vue-code-highlight'

export default ({ req, app }) => {
  Vue.directive('class', VueClassDirective(app.store))
  Vue.use(VueCodeHighlight)
  
  Vue.mixin({
    computed: {
      $NAME () {
        return process.env.NODE_ENV === 'development' ? this.$options.name
          .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
          .map(x => x.toLowerCase())
          .join('-')
          .toUpperCase() : null;
      },
      ...mapGetters('app', {
        $MD: 'isMdBreakpoint',
        $XS: 'isSmBreakpoint',
      }),
    },
    methods: {
      $RESPONSIVE_PROP (name) {
        if (Array.isArray(this[name])) {
          return this[name][this.$MD ? 1 : 0]
        } else {
          return this[name]
        }
      }
    }
  })
}