import { ceilToTwo, isMobile } from './utils'

const remRatio = 0.04
const layoutRef = document.querySelector('#app') as HTMLDivElement | null

const resizeRootFontSize = (clientWidth: number) => {
  document.documentElement.style.fontSize =
    ceilToTwo(clientWidth * remRatio) + 'px'
}

export const resizeFrame = () => {
  let winWidth = window.innerWidth
  let frameWidth

  if (layoutRef) {
    frameWidth = isMobile() ? winWidth : Math.min(winWidth, 600)
    layoutRef.style.width = frameWidth + 'px'
    resizeRootFontSize(frameWidth)
  } else {
    resizeRootFontSize(winWidth)
  }
}
