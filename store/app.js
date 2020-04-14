import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindRawConfig from '~/tailwind.config.js'

const tailwindConfig = resolveConfig(tailwindRawConfig)

export const state = () => ({
  window: {
    width: null,
    height: null
  }
})

export const mutations = {
  setWindow (state, { width, height }) {
    state.window.width = width
    state.window.height = height
  }
}

export const getters = {
  activeBreakpoint (state, getters) {
    const breakpoints = { ...tailwindConfig.theme.screens }
    const currentWidth = parseInt(state.window.width || 0)

    if (currentWidth < parseInt(breakpoints.sm)) {
      return 'sm'
    } else if (currentWidth < parseInt(breakpoints.md)) {
      return 'md'
    } else {
      return ''
    }
  },
  isSmBreakpoint (state, getters) {
    return getters.activeBreakpoint === 'sm'
  },
  isMdBreakpoint (state, getters) {
    return getters.activeBreakpoint === 'md'
  }
}