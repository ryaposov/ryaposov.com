export default (...args) => [...args].reduce((a, b) => {
  return a.concat(!isNaN(b) ? [b.toString(), b] : b)
}, [])
