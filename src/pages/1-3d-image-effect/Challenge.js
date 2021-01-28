import React from 'react'
import { useSpring, interpolate, animated } from 'react-spring'
import { useMousePositionCallback } from '/machinery/useMousePositionCallback'
import styles from './Challenge.css'

export function Challenge() {
  const [spring, setSpring] = useSpring(() => ({
    rotX: 0,
    rotY: 0
  }))

  useMousePositionCallback(({ x, y }) => {
    // Calculate rotX and rotY, based on mouse x and y
    // setSpring({ rotX, rotY })
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
