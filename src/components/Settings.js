import React from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'

function Settings({
  breakLength,
  sessionLength,
  setSessionLength,
  setBreakLength,
}) {
  function handleClick(e) {
    e.preventDefault()
    if (typeof e !== 'null') {
      switch (e) {
        case 'break-decrement':
          setBreakLength((prevBL) => prevBL - 1)
          break
        case 'break-increment':
          setBreakLength((prevBL) => prevBL + 1)
          break

        default:
          break
      }
    }
  }
  return (
    <div className='settings theclock'>
      <h2 className='title'>Settings</h2>
      <div className='settings-container'>
        <div>
          <h4 id='break-label'>Break length</h4>

          <BsFillCaretUpFill
            className='btn'
            onClick={(e) => handleClick(e.target.farthestViewportElement.id)}
            id='break-increment'
          />
          <h2 id='break-length'>{breakLength}</h2>
          <h3>
            <BsFillCaretDownFill
              className='btn'
              onClick={(e) => handleClick(e.target.farthestViewportElement.id)}
              id='break-decrement'
            />
          </h3>
        </div>
        <div>
          <h4 id='session-label'>Session length</h4>

          <BsFillCaretUpFill
            id='session-increment'
            className='btn'
            onClick={(e) => handleClick(e.target.farthestViewportElement.id)}
          />
          <h2 id='session-length'>{sessionLength}</h2>
          <BsFillCaretDownFill
            id='session-decrement'
            className='btn'
            onClick={(e) => handleClick(e.target.farthestViewportElement.id)}
          />
        </div>
      </div>
    </div>
  )
}

export default Settings
