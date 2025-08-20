const eye1 = document.querySelectorAll('.eye-pupils')[0]
const eye2 = document.querySelectorAll('.eye-pupils')[1]
let clientHeight = document.documentElement.clientHeight
let clientWidth = document.documentElement.clientWidth
window.addEventListener('mousemove', (e) => {
  requestAnimationFrame(() => {
    const { x, y } = e
    let left = (x / clientWidth) * 100
    let top = (y / clientHeight) * 100
    document.body.style.setProperty('--eye-left', `${left}%`)
    document.body.style.setProperty('--eye-top', `${top}%`)
  })
})
window.addEventListener('resize', () => {
  clientHeight = document.documentElement.clientHeight
  clientWidth = document.documentElement.clientWidth
})
