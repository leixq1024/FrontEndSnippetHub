let radius = 110 // 光照半径
// 设置css变量
const setStyleVar = (el, key, val) => el && el.style.setProperty(key, val)
// 遮罩元素
const mask = document.getElementById('mask')
// 火把元素
const torch = document.getElementById('torch')
// 修改遮罩层光圈位置
const setPos = (clientX, clientY) => {
  const { left, top } = mask.getBoundingClientRect()
  setStyleVar(mask, '--x', clientX - left + 'px')
  setStyleVar(mask, '--y', clientY - top + 'px')
  // 火把居中显示在光圈圆心
  setStyleVar(torch, '--x', clientX - left + 'px')
  setStyleVar(torch, '--y', clientY - top + 'px')
}
// 鼠标移动时，更新遮罩层光圈位置
mask.addEventListener('mousemove', (e) => {
  setPos(e.clientX, e.clientY)
})
// 滚轮滚动时，更新光照半径
mask.addEventListener('wheel', (e) => {
  radius = Math.max(50, Math.min(200, radius + e.deltaY * 0.1))
  setStyleVar(mask, '--r', radius + 'px')
})
let flickerTime = 0
// 遮罩层呼吸效果
const maskBreathe = () => {
  flickerTime += 0.05
  setStyleVar(mask, '--r', radius + Math.sin(flickerTime * 3) * 3 + 'px')
  requestAnimationFrame(maskBreathe)
}
maskBreathe()
  