import React, { useContext, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar.jsx'
import Auth from './components/Auth.jsx'
import Profile from './components/Profile.jsx'
import Public from './components/Public.jsx'
import { UserContext } from './context/UserProvider.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'


export default function App() {

  const { token, logout } = useContext(UserContext)

  function App() {
    const { getAllComments } = useContext(UserContext);
    // Fetch all comments once when the application loads using the context's getAllComments function
    useEffect(() => {
        getAllComments() 
    }, []); // Empty dependency array ensures this effect runs only once when the app starts
}


  return (
    <div className="app">
      {token && <Navbar logout={logout} />}
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/profile" /> : <Auth />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute token={token} redirectTo="/">
            <Profile />
          </ProtectedRoute>}
        />
        <Route
          path="/public"
          element={<ProtectedRoute token={token} redirectTo="/">
            <Public />
          </ProtectedRoute>
          }
        />
      </Routes>
    </div >
  )
}