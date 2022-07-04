import React, { useState } from 'react'
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
  const [counter, setCounter] = useState(60)

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter((prevC) => prevC - 1), 1000)
    return () => clearInterval(timer)
  }, [counter])

  function handleReset() {
    //stop timer
    setSessionLength(25)
    setBreakLength(5)
  }
  function toggleTimer() {
    setCounter(0)
  }
  return (
    <div className='theclock'>
      <h2 className='title' id='timer-label'>
        Session
      </h2>
      <h1 id='time-left'>{counter}</h1>
      <div className='settings-container'>
        <h2 onClick={toggleTimer} className='btn' id='start_stop'>
          <BsPauseFill /> <BsPlayFill />
        </h2>
        <h2 onClick={handleReset} className='btn' id='reset'>
          <BsArrowCounterclockwise />
        </h2>
      </div>
    </div>
  )
}

export default TheClock
