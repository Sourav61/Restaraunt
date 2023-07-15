import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import Menu from "./pages/menu/Menu"
import About from "./pages/about/About"
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="">
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
