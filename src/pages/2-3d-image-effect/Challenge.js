import React from 'react'
import { useSpring, interpolate, animated } from 'react-spring'
import { useMousePositionCallback } from '/machinery/useMousePositionCallback'
import styles from './Challenge.css'

export function Challenge() {
  const imageRef = React.useRef(null)
  const [spring, setSpring] = useSpring(() => ({
    rotX: 0,
    rotY: 0
  }))

  useMousePositionCallback(({ x, y }) => {
    const { top, left, width, height } = imageRef.current.getBoundingClientRect()
    const imageCenter = {
      x: left + width / 2,
      y: top + height / 2
    }

    // Calculate rotX and rotY, based on mouse x and y
    // setSpring({ rotX, rotY })
    // The movement should be relative to the image, not the screen!
  })

  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <animated.img
          ref={imageRef}
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
    </div>
  )
}
