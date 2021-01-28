import React from 'react'

export function useScrollPositionCallback(callback) {
  const stateRef = React.useRef({
    current: 0,
    total: 0
  })
  const callbackRef = React.useRef(null)
  callbackRef.current = callback

  React.useEffect(
    () => {
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleResize)

      stateRef.current = {
        current: window.pageYOffset,
        total: document.body.scrollHeight - window.innerHeight
      }

      callbackRef.current && callbackRef.current(stateRef.current)

      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('scroll', handleResize)
      }

      function handleScroll() {
        stateRef.current.current = window.pageYOffset
        callbackRef.current && callbackRef.current(stateRef.current)
      }

      function handleResize() {
        stateRef.current.total = document.body.scrollHeight - window.innerHeight
        callbackRef.current && callbackRef.current(stateRef.current)
      }
    }
  )
}
