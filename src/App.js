import { useEffect, useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Settings from './components/Settings'
import TheClock from './components/TheClock'
import useSound from 'use-sound'
import sound from './bell-ringing-05.mp3'
import duration from 'format-duration-time'

function App() {
  // const [timeLeft, setTimeLeft] = useState(1500)
  const [counter, setCounter] = useState(1500)
  const [playPause, setPlayPause] = useState(false)
  //const [status, setStatus] = useState('Session')
  const [playBell] = useSound(sound)
  //const [timeLeft, setTimeLeft] = useState('25:00')
  //const [breakLength, setBreakLength] = useState(5)
  //const [sessionLength, setSessionLength] = useState(25)

  const [theClock, setTheClock] = useState({
    status: 'Session',
    breakLength: 5,
    sessionLength: 25,
    timeLeft: 1500,
  })

  // useEffect(() => {
  //   setCounter(sessionLength * 60)
  // }, [sessionLength])

  useEffect(() => {
    if (counter < 0 && theClock.status === 'Session') {
      playBell()
      setCounter(theClock.breakLength * 60)
      // setStatus('Break')
    } else if (counter < 0 && theClock.status === 'Break') {
      playBell()
      setCounter(theClock.sessionLength * 60)
      // setStatus('Session')
    }
    // setTimeLeft(duration(counter * 1000).format('mm:ss'))
    const timer =
      playPause && setInterval(() => setCounter((prevC) => prevC - 1), 1000)
    return () => clearInterval(timer)
  }, [playPause, counter])

  return (
    <div className='App'>
      <Header />
      <main>
        <TheClock
          // timeLeft={timeLeft}
          // breakLength={breakLength}
          // sessionLength={sessionLength}
          // setBreakLength={setBreakLength}
          // setSessionLength={setSessionLength}
          playPause={playPause}
          setPlayPause={setPlayPause}
          sound={sound}
          counter={counter}
          setCounter={setCounter}
          theClock={theClock}
          setTheClock={setTheClock}
          // display={theClock.timeLeft}
        />
        <Settings
          // breakLength={breakLength}
          // sessionLength={sessionLength}
          // setBreakLength={setBreakLength}
          // setSessionLength={setSessionLength}
          theClock={theClock}
          setTheClock={setTheClock}
        />
      </main>
    </div>
  )
}

export default App
