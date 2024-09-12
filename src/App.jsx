import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './firebase/Dashboard'
import Appp from './firebase/Appp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Dashboard/> */}
      
       <Appp/>

    </>
  )
}

export default App
