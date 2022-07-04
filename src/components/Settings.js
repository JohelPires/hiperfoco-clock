import React from 'react'
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'

function Settings() {
  return (
    <div className='settings theclock'>
      <h2 className='title'>Settings</h2>
      <div className='settings-container'>
        <div>
          <h4 id='break-label'>Break length</h4>

          <BsFillCaretUpFill id='break-increment' />
          <h2 id='break-length'>5</h2>
          <BsFillCaretDownFill id='break-decrement' />
        </div>
        <div>
          <h4 id='session-label'>Session length</h4>

          <BsFillCaretUpFill id='session-increment' />
          <h2 id='session-length'>25</h2>
          <BsFillCaretDownFill id='session-decrement' />
        </div>
      </div>
    </div>
  )
}

export default Settings
