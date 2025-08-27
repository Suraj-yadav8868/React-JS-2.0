import { useState } from 'react'
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Contact from "./components/Contact/Contact"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <About/>
    <Experience/>
    <Contact/>
    </>
  )
}

export default App
