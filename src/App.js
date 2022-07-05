import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Settings from './components/Settings'
import TheClock from './components/TheClock'

function App() {
  // const [timeLeft, setTimeLeft] = useState(1500)
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)

  return (
    <div className='App'>
      <Header />
      <main>
        <TheClock
          // timeLeft={timeLeft}
          breakLength={breakLength}
          sessionLength={sessionLength}
          setBreakLength={setBreakLength}
          setSessionLength={setSessionLength}
        />
        <Settings
          breakLength={breakLength}
          sessionLength={sessionLength}
          setBreakLength={setBreakLength}
          setSessionLength={setSessionLength}
        />
      </main>
    </div>
  )
}

export default App
