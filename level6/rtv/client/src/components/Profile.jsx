import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.jsx'

export default function Profile() {
  const {
    user: { username },
  } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add A Issue</h3>
    </div>
  )
}