
import './App.css'
import { BrowserRouter, Routes, Route , Link } from "react-router-dom"; import { useState } from 'react'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Project from './components/project'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <nav>
        <Link to={"/about"}>About</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/contacts"}>Contact</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/contacts' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
