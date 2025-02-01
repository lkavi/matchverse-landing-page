import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './routes/Home/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
