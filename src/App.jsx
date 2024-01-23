import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import FoodList from './Components/FoodList/FoodList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Plate from './Pages/Plate/Plate'
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/:id" element={<Plate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
