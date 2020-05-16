export default allowed => val => {
  if (Array.isArray(val)) {
    return val.every(item => allowed.includes(item)) && val.length === 2
  }

  return allowed.includes(val)
}