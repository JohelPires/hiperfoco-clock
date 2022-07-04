import React from 'react'
import {
  BsArrowCounterclockwise,
  BsPauseFill,
  BsPlayFill,
} from 'react-icons/bs'
import { useTimer } from 'use-timer'

function TheClock({
  sessionLength,
  timeLeft,
  setSessionLength,
  setBreakLength,
}) {
  const { time, start, pause, reset, status } = useTimer({
    initialTime: sessionLength,
    timerType: 'DECREMENTAL',
  })

  function toggleTimer() {
    if (status === 'PAUSED' || status === 'STOPPED') {
      start()
    } else {
      pause()
    }
  }

  function handleReset() {
    //stop timer
    setSessionLength(25)
    setBreakLength(5)
    reset()
  }
  return (
    <div className='theclock'>
      <h2 className='title' id='timer-label'>
        Session
      </h2>
      <h1 id='time-left'>
        {timeLeft} - {time}
      </h1>
      <div className='settings-container'>
        <h2 onClick={toggleTimer} className='btn' id='start_stop'>
          {status === 'RUNNING' ? <BsPauseFill /> : <BsPlayFill />}
        </h2>
        <h2 onClick={handleReset} className='btn' id='reset'>
          <BsArrowCounterclockwise />
        </h2>
      </div>
    </div>
  )
}

export default TheClock
