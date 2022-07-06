import React, { useEffect, useState } from 'react'
import {
  BsArrowCounterclockwise,
  BsPauseFill,
  BsPlayFill,
} from 'react-icons/bs'

function TheClock({
  theClock,
  setTheClock,
  sound,
  counter,
  playPause,
  setPlayPause,
  setCounter,
}) {
  function handleReset() {
    //stop timer
    setTheClock({
      status: 'Session',
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 1500,
    })
    setCounter(1500)
    setPlayPause(false)
  }
  function toggleTimer() {
    // const updatePlayPause = !theClock.playPause
    // setTheClock((prevTC) => ({ ...prevTC, playPause: updatePlayPause }))
    setPlayPause((prevPP) => !prevPP)
    console.log(theClock)
  }
  return (
    <div className='theclock'>
      <h2 className='title' id='timer-label'>
        {theClock.status}
      </h2>
      <h1 id='time-left'>{theClock.timeLeft}</h1>

      {theClock.timeLeft === 0 && (
        <audio id='beep' autoPlay>
          <source src={sound} type='audio/mpeg'></source>
        </audio>
      )}

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
