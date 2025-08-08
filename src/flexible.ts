import { ceilToTwo, isMobile } from './utils'

const remRatio = 0.04
const whRatio = 0.462
const layoutRef = document.querySelector('#app') as HTMLDivElement | null

const resizeRootFontSize = (clientWidth: number) => {
  document.documentElement.style.fontSize =
    ceilToTwo(clientWidth * remRatio) + 'px'
}

export const resizeFrame = () => {
  let winWidth = window.innerWidth
  let winHeight = window.innerHeight
  let frameWidth

  if (layoutRef) {
    frameWidth = isMobile() ? winWidth : winHeight * whRatio
    layoutRef.style.width = frameWidth + 'px'
    resizeRootFontSize(frameWidth)
  } else {
    resizeRootFontSize(winWidth)
  }
}
