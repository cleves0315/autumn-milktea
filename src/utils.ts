export const ceilToTwo = (num: number, decimal = 2) => {
  const factor = Math.pow(10, decimal)
  const rounded = Math.ceil(num * factor) / factor
  return rounded.toFixed(decimal)
}

export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}
