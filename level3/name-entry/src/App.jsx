import React, { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = React.useState({firstName: "", lastName: ""})
  const [nameList, setNameList] = React.useState([])

  function handleChange(event){
    const {name, value} = event.target
      setFormData(preFormData => {
        return {
        ...preFormData,
        [name]: value
        }
      })
  }

  function handleSubmit(e){
    e.preventDefault()
    setNameList(prevNameList => {
      return [
        ...prevNameList,
        formData
      ]
    })
    setFormData({firstName: "", lastName: ""})
  }
  
  const nameElement = nameList.map(name => (
    <p>{name.firstName} {name.lastName}</p>
  ))
  return (
    <>
      <h1>
        {formData.firstName} {formData.lastName}
      </h1>

      <form onSubmit={handleSubmit} >
        <input onChange={handleChange}
          type='text'
          placeholder='First Name'
          name='firstName'
          value={formData.firstName}
          />

        <input onChange={handleChange}
          type='text'
          placeholder='Last Name'
          name='lastName'
          value={formData.lastName}
          />

        <button  >Add Name</button>
      </form>

      {nameElement}
    </>
  )
}

export default App
