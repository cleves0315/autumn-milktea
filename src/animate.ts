import { animate as ant } from 'motion'

const entry = async () => {
  ant('#cup-btm', { y: 0 }, { delay: 0.2 })
  await ant('#cup-body', { y: 0 }, { delay: 0.6 })

  const pearls = document.querySelectorAll('.pearl')
  pearls.forEach((pearl, index) => {
    ant(
      pearl,
      { x: 0, y: 0 },
      { delay: index * 0.2, type: 'spring', damping: 12 }
    )
  })

  await ant('#cup-lid', { y: 0 }, { delay: 2.4 })

  ant('#love', { x: 0 }, { type: 'tween' })
  await ant('#sig', { x: 0 }, { type: 'tween', delay: 0.4 })

  ant(
    '#autumns',
    { x: 0, y: 0, rotate: 360 * 4 },
    { type: 'tween', delay: 0.2 }
  )
  await ant(
    '#milktea',
    { x: 0, y: 0, rotate: 360 * 4 },
    { type: 'tween', delay: 0.6 }
  )

  return ant(
    '#forSavage',
    { clipPath: 'inset(0 0 0 0)' },
    { duration: 2, type: 'tween', delay: 0.4 }
  )
}

const shake = async () => {
  ant('#cup-body', { rotate: [0, 8, -8, 8, -8, 0] }, { duration: 0.4 })
  await ant('#cup-lid', { rotate: [0, -8, 8, -8, 8, 0] }, { duration: 0.4 })
  setTimeout(() => {
    shake()
  }, 1000)
}

export const animate = async () => {
  await entry()
  shake()
}
