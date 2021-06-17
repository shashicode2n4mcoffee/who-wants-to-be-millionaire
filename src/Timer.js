import React from 'react'
import { useState, useEffect } from 'react'

const Timer = ({ setTimer, questionNumber }) => {
  const [timeout, setTimeOut] = useState(30)

  useEffect(() => {
    if (timeout === 0) {
      return setTimer(true)
    }
    const interval = setInterval(() => {
      setTimeOut((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [setTimer, timeout])

  useEffect(() => {
    setTimeOut(30)
  }, [questionNumber])

  return timeout
}

export default Timer
