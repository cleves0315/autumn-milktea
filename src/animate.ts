import { animate as ant } from 'motion'

export const animate = async () => {
  ant('#cup-btm', { y: 0 })
  ant('#cup-body', { y: 0 }, { delay: 0.6 })
  await ant('#cup-lid', { y: 0 }, { delay: 0.8 })

  ant('#love', { x: 0 }, { type: 'tween' })
  await ant('#sig', { x: 0 }, { type: 'tween', delay: 0.2 })

  ant('#autumns', { x: 0, y: 0, rotate: 360 * 4 }, { type: 'tween' })
  await ant(
    '#milktea',
    { x: 0, y: 0, rotate: 360 * 4 },
    { type: 'tween', delay: 0.2 }
  )

  ant(
    '#forSavage',
    { clipPath: 'inset(0 0 0 0)' },
    { duration: 2, type: 'tween' }
  )
}
