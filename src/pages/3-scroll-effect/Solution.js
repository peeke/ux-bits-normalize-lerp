import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useScrollPositionCallback } from '/machinery/useScrollPositionCallback'
import styles from './Solution.css'

export function Solution() {
  const imageRef = React.useRef(null)
  const [spring, setSpring] = useSpring(() => ({ y: 0 }))

  useScrollPositionCallback(({ current, total }) => {
    // Move the image from the top of the screen, to the bottom of the screen
    // when the page is scrolled from the top to the bottom

    // setSpring({ y })
  })

  return (
    <div className={styles.component}>
      <animated.img
        ref={imageRef}
        className={styles.image}
        src="https://source.unsplash.com/random/400x400"
        style={{
          transform: spring.y.interpolate(y => `translate3d(0, ${y}px, 0)`)
        }}
      />
    </div>
  )
}
