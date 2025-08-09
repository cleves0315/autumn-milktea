import './style.css'
import { resizeFrame } from './flexible.ts'
import { animate } from './animate.ts'

document.addEventListener('DOMContentLoaded', () => {
  resizeFrame()
})

window.addEventListener('load', () => {
  animate()
})
