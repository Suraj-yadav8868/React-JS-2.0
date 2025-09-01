import { useState } from 'react'
import './App.css'
import ListView from './Components/ListView/ListView.jsx'
import Form from './Components/Form/Form.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Form/>
     <ListView/>
    </>
  )
}

export default App
