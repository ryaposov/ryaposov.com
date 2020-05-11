export const state = () => ({
  window: {
    width: null,
    height: null
  },
  breakpoint: 'sm'
})

export const mutations = {
  setWindow (state, { width, height }) {
    state.window.width = width
    state.window.height = height
  },
  setBreakpoint (state, breakpoint) {
    state.breakpoint = breakpoint
  }
}

export const getters = {
  activeBreakpoint (state, getters) {
    return state.breakpoint
  },
  isSmBreakpoint (state, getters) {
    return getters.activeBreakpoint === 'sm'
  },
  isMdBreakpoint (state, getters) {
    return getters.activeBreakpoint === 'md'
  }
}