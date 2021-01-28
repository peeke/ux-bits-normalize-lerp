import React from 'react'
import { useSpring, interpolate, animated } from 'react-spring'
import { useMousePositionCallback } from '/machinery/useMousePositionCallback'
import { clamp } from '/machinery/clamp'
import styles from './Solution.css'

export function Solution() {
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

    const rotX = -45 * ((y - imageCenter.y) / window.innerHeight)
    const rotY = 45 * ((x - imageCenter.x) / window.innerWidth)

    setSpring({
      rotX: clamp({ min: -22.5, max: 22.5, input: rotX }),
      rotY: clamp({ min: -22.5, max: 22.5, input: rotY })
    })
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
