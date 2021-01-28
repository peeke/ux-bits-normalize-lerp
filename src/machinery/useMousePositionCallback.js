import React from 'react'

export function useMousePositionCallback(callback) {
  const callbackRef = React.useRef(null)
  callbackRef.current = callback

  React.useEffect(
    () => {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)

      function handleMouseMove(e) {
        callbackRef.current({
          x: e.clientX,
          y: e.clientY
        })
      }
    }
  )
}
