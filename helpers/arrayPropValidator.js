export default allowed => val => {
  if (Array.isArray(val)) {
    return val.every(item => allowed.includes(item))
  }

  return allowed.includes(val)
}