import './App.css'
import Home from './Pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Plate from './Pages/Plate/Plate'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/:id" element={<Plate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
