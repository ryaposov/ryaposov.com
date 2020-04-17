import { debounce } from '~/helpers/index.js'

export const state = () => ({
  
})

export const mutations = {
  
}

export const actions = {
  nuxtClientInit({ commit }, context) {
    const state = context.store.state

    commit('app/setWindow', {
      height: window.innerHeight,
      width: window.outerWidth < window.innerWidth && 
        window.outerWidth !== 0 ? window.outerWidth : window.innerWidth
    })

    window.addEventListener('resize', debounce(function () {
      const oldHeight = state.app.window.height
      const oldWidth = state.app.window.width
      const height = window.innerHeight
      const width = window.outerWidth < window.innerWidth && 
        window.outerWidth !== 0 ? window.outerWidth : window.innerWidth

      if (oldHeight !== height || oldWidth !== width) {
        commit('app/setWindow', { height, width })
      }
    }, 500))
  }
}