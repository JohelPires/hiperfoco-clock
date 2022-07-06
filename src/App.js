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
    if (theClock.timeLeft < 0 && theClock.status === 'Session') {
      playBell()
      setTheClock((prevTC) => ({
        ...prevTC,
        timeLeft: prevTC.breakLength * 60,
        status: 'Break',
      }))
    } else if (theClock.timeLeft < 0 && theClock.status === 'Break') {
      playBell()
      setTheClock((prevTC) => ({
        ...prevTC,
        timeLeft: prevTC.sessionLength * 60,
        status: 'Session',
      }))
    }
    // setTimeLeft(duration(counter * 1000).format('mm:ss'))
    const timer =
      playPause &&
      setInterval(
        () =>
          setTheClock((prevTC) => ({
            ...prevTC,
            timeLeft: prevTC.timeLeft - 1,
          })),
        1000
      )
    return () => clearInterval(timer)
  }, [playPause, theClock])

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
          setCounter={setCounter}
          playPause={playPause}
        />
      </main>
    </div>
  )
}

export default App
