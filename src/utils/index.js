/**
 * @description: 剩余时间
 */
// eslint-disable-next-line import/prefer-default-export
export function getTimeArr(now = new Date()) {
  // const Y = now.getFullYear()
  // const M = now.getMonth() + 1
  // const D = now.getDate()
  const h = now.getHours()
  const m = now.getMinutes()
  const s = now.getSeconds()
  return [
    // ...toArr(Y),
    // ...toArr(M),
    // ...toArr(D),
    ...toArr(h),
    ...toArr(m),
    ...toArr(s)
  ]
}

// 更换数组类型
function toArr(n) {
  return n >= 10 ? ('' + n).split('').map(item => Number(item)) : [0, n]
}

/**
 *
 * @desc   格式化现在距${endTime}的剩余时间
 * @param  {Date} endTime
 * @return {String}
 */
export function remainTime(endDate) {
  const startDate = new Date() // 开始时间
  const t = endDate.getTime() - startDate.getTime() // 时间差
  let d = 0
  let h = 0
  let m = 0
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24)
    h = Math.floor((t / 1000 / 60 / 60) % 24)
    m = Math.floor((t / 1000 / 60) % 60)
  }
  function text(num, label) {
    return num ? `${num}${label}` : ''
  }
  const dText = text(d, '天')
  const hText = dText ? `${h}小时` : text(h, '小时')
  const mText = `${m}分钟`
  return dText + hText + mText
}
