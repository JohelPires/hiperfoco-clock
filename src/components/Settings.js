import React from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'

function Settings({ theClock, setTheClock }) {
  function breakIncrement(e) {
    breakLength < 60 && setBreakLength((prevBL) => prevBL + 1)
  }
  function breakDecrement(e) {
    breakLength > 1 && setBreakLength((prevBL) => prevBL - 1)
  }
  function sessionIncrement(e) {
    sessionLength < 60 && setSessionLength((prevBL) => prevBL + 1)
  }
  function sessionDecrement(e) {
    sessionLength > 1 && setSessionLength((prevBL) => prevBL - 1)
  }
  return (
    <div className='settings theclock'>
      <h2 className='title'>Settings</h2>
      <div className='settings-container'>
        <div>
          <h4 className='label' id='break-label'>
            Break length
          </h4>
          <div className='each-setting'>
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
        </div>

        <div>
          <h4 className='label' id='session-label'>
            Session length
          </h4>
          <div className='each-setting'>
            <h3>
              <BsFillCaretUpFill
                id='session-increment'
                className='btn'
                onClick={sessionIncrement}
              />
            </h3>
            <h2 className='length' id='session-length'>
              {sessionLength}
            </h2>
            <h3>
              <BsFillCaretDownFill
                id='session-decrement'
                className='btn'
                onClick={sessionDecrement}
              />
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
