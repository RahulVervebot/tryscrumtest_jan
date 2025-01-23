import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Animations = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
    width={width}
    height={height}
    style={{zIndex:999999}}
  />
  )
}

export default Animations