import { useState } from 'react'
import './App.css'
import Login from "./pages/login.jsx"
import ClassChoose from "./pages/classChoose.jsx"
import Mascot from './components/mascot.jsx'
import MiniMascot from './components/miniMascot.jsx'
import Transition from './components/transition.jsx'
import ChooseNavBar from './components/chooseNavBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Login/>
  )
}

export default App