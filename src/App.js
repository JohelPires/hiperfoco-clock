import { useState } from 'react'
import './App.scss'
import Settings from './components/Settings'
import TheClock from './components/TheClock'

function App() {
  const [timeLeft, setTimeLeft] = useState('25:00')
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)

  return (
    <div className='App'>
      <TheClock
        timeLeft={timeLeft}
        setBreakLength={setBreakLength}
        setSessionLength={setSessionLength}
      />
      <Settings
        breakLength={breakLength}
        sessionLength={sessionLength}
        setBreakLength={setBreakLength}
        setSessionLength={setSessionLength}
      />
    </div>
  )
}

export default App
