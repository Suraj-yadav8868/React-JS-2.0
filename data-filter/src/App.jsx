import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Filter from './components/Filter/Filter'
import Home from './components/Home/Home'
// import Filterbar from './components/FilterBar/Filterbar'
import Filterbar from './components/Filterbar/Filterbar'


export default function App() {
  return (
    <>
    <Navbar/>
    <Filter/>
    <Home/>
    <Filterbar/>
    </>
  )
}