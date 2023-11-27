import { useState } from 'react'
import {  Routes, Route, Link } from 'react-router-dom'
import Header from './assets/Header'
import Footer from './assets/Footer'
import About from './assets/About'
import Home from './assets/Home'
import Services from './assets/Services'
import './App.css'

function App() {


  return (
    <>
      <Header />
      <nav>
        <Link to="/assets/Home">
          home
        </Link>
        <Link to="/assets/About">
          About
        </Link>
        <Link to="/assets/Services">
          Services
        </Link>
      </nav>

        <Routes>
          <Route path="/assets/Home" element={<Home />} />
          <Route path="/assets/About" element={<About />} />
          <Route path="/assets/Services" element={<Services />} />
        </Routes>

      <Footer />
    </>
)}

export default App
