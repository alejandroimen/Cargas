import { useState } from 'react'
import Principal from './components/pages/Principal/Principal'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Principal></Principal>
  )
}

export default App
