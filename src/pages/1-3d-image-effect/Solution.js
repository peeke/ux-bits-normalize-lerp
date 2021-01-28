import React from 'react'
import { useSpring, interpolate, animated } from 'react-spring'
import { useMousePositionCallback } from '/machinery/useMousePositionCallback'
import styles from './Solution.css'

export function Solution() {
  const [spring, setSpring] = useSpring(() => ({
    rotX: 0,
    rotY: 0
  }))

  useMousePositionCallback(({ x, y }) => {
    const rotX = 22.5 - (45 / window.innerHeight) * y
    const rotY = (45 / window.innerWidth) * x - 22.5
    setSpring({ rotX, rotY })
  })

  return (
    <div className={styles.component}>
      <animated.img
        className={styles.image}
        src="https://source.unsplash.com/random/400x400"
        style={{
          transform: interpolate(
            [spring.rotX, spring.rotY],
            (rotX, rotY) => `rotateX(${rotX}deg) rotateY(${rotY}deg)`
          )
        }}
      />
    </div>
  )
}
