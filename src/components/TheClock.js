import formatDuration from 'format-duration'
import React, { useEffect, useState } from 'react'
import {
  BsArrowCounterclockwise,
  BsPauseFill,
  BsPlayFill,
} from 'react-icons/bs'
import sound from '../bell-ringing-05.mp3'

function TheClock({
  sessionLength,
  breakLength,
  setSessionLength,
  setBreakLength,
}) {
  const [counter, setCounter] = useState(sessionLength * 60)
  const [playPause, setPlayPause] = useState(false)
  const [status, setStatus] = useState('Session')

  useEffect(() => {
    setCounter(sessionLength * 60)
  }, [sessionLength])

  // Third Attempts
  useEffect(() => {
    if (counter < 0 && status === 'Session') {
      setCounter(breakLength * 60)
      setStatus('Break')
    } else if (counter < 0 && status === 'Break') {
      setCounter(sessionLength * 60)
      setStatus('Session')
    }
    const timer =
      playPause && setInterval(() => setCounter((prevC) => prevC - 1), 1000)
    return () => clearInterval(timer)
  }, [playPause, counter])

  function handleReset() {
    //stop timer
    setSessionLength(25)
    setBreakLength(5)
    setCounter(1500)
  }
  function toggleTimer() {
    setPlayPause((prevPP) => !prevPP)
    console.log(playPause)
  }
  return (
    <div className='theclock'>
      <h2 className='title' id='timer-label'>
        {status}
      </h2>
      <h1 id='time-left'>{formatDuration(counter * 1000)}</h1>

      {/* <audio id='beep' autoPlay controls>
        <source src={sound} type='audio/mpeg'></source>
      </audio> */}

      <audio src={sound} autoPlay />

      <div className='settings-container play-pause-btns'>
        <h2 onClick={toggleTimer} className='btn' id='start_stop'>
          {playPause ? <BsPauseFill /> : <BsPlayFill />}
        </h2>
        <h2 onClick={handleReset} className='btn' id='reset'>
          <BsArrowCounterclockwise />
        </h2>
      </div>
    </div>
  )
}

export default TheClock
