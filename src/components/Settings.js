import React from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'

function Settings({
  breakLength,
  sessionLength,
  setSessionLength,
  setBreakLength,
}) {
  function breakIncrement(e) {
    setBreakLength((prevBL) => prevBL + 1)
  }
  function breakDecrement(e) {
    setBreakLength((prevBL) => prevBL - 1)
  }
  function sessionIncrement(e) {
    setSessionLength((prevBL) => prevBL + 1)
  }
  function sessionDecrement(e) {
    setSessionLength((prevBL) => prevBL - 1)
  }
  return (
    <div className='settings theclock'>
      <h2 className='title'>Settings</h2>
      <div className='settings-container'>
        <div>
          <h4 id='break-label'>Break length</h4>
          <h3>
            <BsFillCaretUpFill
              className='btn'
              onClick={breakIncrement}
              id='break-increment'
            />
          </h3>

          <h2 id='break-length'>{breakLength}</h2>
          <h3>
            <BsFillCaretDownFill
              className='btn'
              onClick={breakDecrement}
              id='break-decrement'
            />
          </h3>
        </div>
        <div>
          <h4 id='session-label'>Session length</h4>

          <BsFillCaretUpFill
            id='session-increment'
            className='btn'
            onClick={sessionIncrement}
          />
          <h2 id='session-length'>{sessionLength}</h2>
          <BsFillCaretDownFill
            id='session-decrement'
            className='btn'
            onClick={sessionDecrement}
          />
        </div>
      </div>
    </div>
  )
}

export default Settings
