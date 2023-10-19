import React, { useState } from 'react'
import Badge from './Badge'
import './App.css'


function App() {
  const [formData, setFormData] = useState('')
  const [badgeList, setBadgeList] = useState([])

  function handleChange(event){
    const {name, value} = event.target
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }))
  }

  function handleSubmit(e){
    e.preventDefault(
      setBadgeList(prevBadgeList => {
        return [
        ...prevBadgeList,
        formData
      ]
      })
      )
  }

  const badges = badgeList.map(badge => (
    <Badge 
    key={badge.phone}
    firstName={badge.firstName}
    lastName={badge.lastName}
    email={badge.email}
    birthPlace={badge.birthPlace}
    phone={badge.phone}
    favoriteFood={badge.favoriteFood}
    comments={badge.comments}
    />
  ))
  

  return (
    <>
      <form onSubmit={handleSubmit} >
        <input onChange={handleChange}
        minLength={3}
        type='text' 
        placeholder="First Name"
        name="firstName"
        required
        />

        <input onChange={handleChange}
        minLength={3}
        type='text' 
        placeholder="Last Name"
        name="lastName"
        required
        />

        <input onChange={handleChange}
        minLength={3}
        type='text' 
        placeholder="E-mail"
        name="email"
        required
        />

        <input onChange={handleChange}
        minLength={3}
        type='text' 
        placeholder="Place of Birth"
        name="birthPlace"
        required
        />

        <input onChange={handleChange}
        minLength={3}
        type='phone'
        pattern='[0-9]{10}'
        placeholder="Phone no dashes ex(32125423650)"
        name="phone"
        required
        />

        <input onChange={handleChange}
        minLength={3}
        type='text' 
        placeholder="Favorite Food"
        name="favoriteFood"
        required
        />

        <div onSubmit={handleSubmit}>
          <textarea 
          onChange={handleChange}
          minLength={3}
          name='comments'
          placeholder='Tells us about yourself'
          className="comments">

          </textarea>

          <button className="submitBtn">Submit</button>

        </div>

      </form>

      <div>

        {badges}

      </div>
    </>
  )
}

export default App
