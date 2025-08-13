import './style.css'
import { resizeFrame } from './flexible.ts'
import { animate } from './animate.ts'
import { isMobile } from './utils.ts'

const queryDom = (selector: string) => {
  return document.querySelector(selector) as HTMLElement
}

const adaptH5 = () => {
  if (isMobile()) {
    queryDom('#love').style.display = 'none'

    queryDom('#cup-btm').style.bottom = '1.2rem'
    queryDom('#cup-body').style.bottom = '3.8rem'
    queryDom('#cup-lid').style.bottom = '24.7rem'

    queryDom('#title').style.paddingTop = '1rem'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  adaptH5()
  resizeFrame()
})

window.addEventListener('load', async () => {
  await animate()

  queryDom('#cup-body').addEventListener('click', () => {
    fetch(import.meta.env.VITE_API_URL)
  })
})
