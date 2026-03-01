import { useState } from 'react'
import './App.css'
import Login from "./pages/login.jsx"
import classChoose from "./pages/classChoose.jsx"
import Mascot from './components/mascot.jsx'
import Transition from './components/transition.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Transition/>
  )
}

export default App