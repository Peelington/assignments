import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const { logout } = props
  return (
    <div className="navbar">
      <Link to="/profile" className='navlink'>Profile</Link>
      <Link to="/public" className='navlink'>Public</Link>
      <button onClick={logout}>logout</button>
    </div>
  )
}