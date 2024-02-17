import React from 'react'
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Notes from '../components/Notes'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About'



const Routers = () => {
  return (
    <div>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
  </Routes>

    </div>
  )
}

export default Routers