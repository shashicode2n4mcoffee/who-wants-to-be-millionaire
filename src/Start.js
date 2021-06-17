import React, { useRef } from 'react'
import useSound from 'use-sound'
import intro from './assets/Intro.mp3'

const Start = ({ setUsername }) => {
  const inputRef = useRef()
  const [introPlay, { stop }] = useSound(intro)

  const handleClick = () => {
    inputRef.current.value && introPlay()
    setTimeout(() => {
      inputRef.current.value && setUsername(inputRef.current.value)
      stop()
    }, 16000)
  }

  return (
    <div className='start'>
      <input
        type='text'
        className='startInput'
        placeholder='Enter your name'
        ref={inputRef}
      />
      <button className='startButton' onClick={handleClick}>
        Start
      </button>
    </div>
  )
}

export default Start
