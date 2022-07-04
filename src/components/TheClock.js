import React from 'react'
import { BsArrowCounterclockwise, BsPlayFill } from 'react-icons/bs'

function TheClock() {
  return (
    <div className='theclock'>
      <h2 className='title' id='timer-label'>
        Session
      </h2>
      <h1 id='time-left'>23:59</h1>
      <div className='settings-container'>
        <h2 className='btn' id='start_stop'>
          <BsPlayFill />
        </h2>
        <h2 className='btn' id='reset'>
          <BsArrowCounterclockwise />
        </h2>
      </div>
    </div>
  )
}

export default TheClock
