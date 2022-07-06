import React from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'

function Settings({ theClock, setTheClock, setCounter, playPause }) {
  function breakIncrement(e) {
    // const updateTC = theClock.breakLength + 1
    theClock.breakLength < 60 &&
      setTheClock((prevTC) => ({
        ...prevTC,
        breakLength: prevTC.breakLength + 1,
      }))
  }
  function breakDecrement(e) {
    theClock.breakLength > 1 &&
      setTheClock((prevTC) => ({
        ...prevTC,
        breakLength: prevTC.breakLength - 1,
      }))
  }
  function sessionIncrement() {
    const updateCounter = (theClock.sessionLength + 1) * 60
    // !playPause && setCounter(updateCounter)
    !playPause &&
      theClock.sessionLength < 60 &&
      setTheClock((prevTC) => ({
        ...prevTC,
        sessionLength: prevTC.sessionLength + 1,
        timeLeft: updateCounter,
      }))
  }
  function sessionDecrement() {
    const updateCounter = (theClock.sessionLength - 1) * 60
    // !playPause && setCounter(updateCounter)
    !playPause &&
      theClock.sessionLength > 1 &&
      setTheClock((prevTC) => ({
        ...prevTC,
        sessionLength: prevTC.sessionLength - 1,
        timeLeft: updateCounter,
      }))
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

            <h2 id='break-length'>{theClock.breakLength}</h2>
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
              {theClock.sessionLength}
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
