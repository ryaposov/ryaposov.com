const set = (el, value, activeDesktop) => {
  const classList = el.classList
  let mobile = value[0]
  let desktop = value[1]

  // Accepts value as Object
  if (!Array.isArray(value) && typeof value === 'object') {
    mobile = value.mobile
    desktop = value.desktop
  // Accepts value as String: comma/space separated values
  } else if (typeof value === 'string') {
    const splitSign = value.indexOf(',') > -1 ? ',' : ' '
    mobile = value.split(splitSign)[0].replace(/\s/g, '')
    desktop = value.split(splitSign)[1].replace(/\s/g, '')
  }

  if (activeDesktop) {
    classList.add(desktop)
    classList.remove(mobile)
  } else {
    classList.add(mobile)
    classList.remove(desktop)
  }
}

export default Store => ({
  bind(el, binding, vnode) {
    let value = binding.value

    set(el, value, Store.getters['app/isMdBreakpoint'])

    const unwatch = Store.watch(
      (state, getters) => getters['app/isMdBreakpoint'],
      activeDesktop => set(el, value, activeDesktop)
    )
    el.__activeDesktop_unwatch__ = unwatch
  },
  unbind(el) {
    el.__activeDesktop_unwatch__ && el.__activeDesktop_unwatch__()
  }
})
