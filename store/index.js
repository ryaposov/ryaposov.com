import debounce from '~/helpers/debounce.js'

export const state = () => ({
  
})

export const mutations = {
  
}

export const actions = {
  nuxtServerInit ({ commit }, { req, app }) {
    commit('app/setBreakpoint', app.serverMobileDetected ? 'sm' : 'md')
  },
  nuxtClientInit({ commit }, context) {
    const state = context.store.state
    const breakpoints = {
      xxs: '(min-width: 0) and (max-width: 359px)',
      xs: '(min-width: 360px) and (max-width: 413px)',
      sm: '(min-width: 414px) and (max-width: 759px)',
      md: '(min-width: 760px)'
    }

    const checkQuery = query => 
      window.matchMedia(query).matches

    const reactToMediaQueryChange = breakpoint => ($event) => 
      checkQuery($event.media) ? commit('app/setBreakpoint', breakpoint) : void(0)

    const findMatchingQuery = () => 
      Object.keys(breakpoints).find(breakpoint => checkQuery(breakpoints[breakpoint]))

    Object.keys(breakpoints).forEach(breakpoint => {
      window.matchMedia(breakpoints[breakpoint])
        .addListener(reactToMediaQueryChange(breakpoint))
    })

    commit('app/setBreakpoint', findMatchingQuery())
  }
}