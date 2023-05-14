import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="py-2 my-2 text-center text-rose-700 w-full text-6xl font-bold">
        Silicon Maze 2023
      </div>
    </>
  )
}

export default App
