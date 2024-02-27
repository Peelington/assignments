import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'

const initInputs = {
  title: "",
  description: "",
}

export default function IssueForm(props) {
  const [inputs, setInputs] = useState(initInputs)
  const { addIssue } = props

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
  }

  const { title, description } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Title" />
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Political issue" />
      <button onClick={addIssue}>Add Political issue</button>
    </form>
  )
}