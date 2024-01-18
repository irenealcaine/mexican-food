import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import FoodList from './assets/Components/FoodList/FoodList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <FoodList />
    </>
  )
}

export default App
