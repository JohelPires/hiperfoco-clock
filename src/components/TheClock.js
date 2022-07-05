import formatDuration from 'format-duration'
import React, { useEffect, useState } from 'react'
import {
  BsArrowCounterclockwise,
  BsPauseFill,
  BsPlayFill,
} from 'react-icons/bs'

function TheClock({
  sessionLength,
  timeLeft,
  setSessionLength,
  setBreakLength,
}) {
  const [counter, setCounter] = useState(sessionLength * 60)
  const [playPause, setPlayPause] = useState(false)

  useEffect(() => {
    setCounter(sessionLength * 60)
  }, [sessionLength])

  // Third Attempts
  useEffect(() => {
    const timer =
      playPause && setInterval(() => setCounter((prevC) => prevC - 1), 1000)
    return () => clearInterval(timer)
  }, [playPause, counter])

  function handleReset() {
    //stop timer
    setSessionLength(1500)
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
        Session
      </h2>
      <h1 id='time-left'>{formatDuration(counter * 1000)}</h1>
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
