import './style.css'
import { resizeFrame } from './flexible.ts'
import { animate } from './animate.ts'

resizeFrame()

fetch('/cup-body.png').then(() => {
  animate()
})
