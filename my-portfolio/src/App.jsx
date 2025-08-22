import { useState } from 'react'
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <About/>
    </>
  )
}

export default App
