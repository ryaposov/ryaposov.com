import debounce from '~/helpers/debounce.js'

const decideWindowWidth = payload => {
  return payload.outerWidth < payload.innerWidth && 
    payload.outerWidth !== 0 ? payload.outerWidth : payload.innerWidth
}

export const state = () => ({
  
})

export const mutations = {
  
}

export const actions = {
  nuxtServerInit ({ commit }, { req, app }) {
    commit('app/setWindow', {
      height: null,
      width: app.serverMobileDetected ? null : 760
    })
  },
  nuxtClientInit({ commit }, context) {
    const state = context.store.state

    commit('app/setWindow', {
      height: window.innerHeight,
      width: decideWindowWidth(window)
    })

    window.addEventListener('resize', debounce(function () {
      const oldHeight = state.app.window.height
      const oldWidth = state.app.window.width
      const height = window.innerHeight
      const width = decideWindowWidth(window)

      if (oldHeight !== height || oldWidth !== width) {
        commit('app/setWindow', { height, width })
      }
    }, 500))
  },
}