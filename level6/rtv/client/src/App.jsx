import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Auth from './components/AuthForm.jsx'
import Profile from './components/Profile.jsx'
import Public from './components/Public.jsx'
import { UserContext } from './context/UserProvider.jsx'

export default function App(){

  const {token, logout} = useContext(UserContext)

  return (
    <div className="app">
      <Navbar logout={logout}/>
      <Routes>
        <Route 
          path="/" 
          element={<Auth />}
        />
        <Route 
          path="/profile"
          element={<Profile />}
        />
        <Route 
          path="/public"
          element={<Public />}
        />
      </Routes>
    </div>
  )
}