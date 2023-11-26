import React, { useContext, useEffect, useState } from 'react'
import { UglyContextProvider, UglyContext } from './assets/UglyContext'
import axios from 'axios'
import Header from './assets/Header'
import Footer from './assets/Footer'
import './App.css'
import UglyThings from './assets/UglyThings'

function App(props) {
  
  const { 
    uglyThing,  
    savedUglies, 
    handleChange,
    handleSubmit
  } = useContext(UglyContext)

  const uglyThingListElement = savedUglies.map((ugly) => {
    return (
      <UglyThings
      key={ugly._id}
      title={ugly.title}
      imgUrl={ugly.imgUrl}
      description={ugly.description}
      ugly_Id={ugly._id}
      />
      )
  })

  return (
    <>
        <Header />
        <main>
          <div className="form">

            <input 
              className="form--input"
              type='text'
              placeholder='Title'
              name="title"
              value={uglyThing.title}
              onChange={handleChange}
              />

            <input 
              className="form--input"
              type='text'
              placeholder='URL'
              name="imgUrl"
              value={uglyThing.imgUrl}
              onChange={handleChange}
              />

            <input 
              className="form--input"
              type='text'
              placeholder='Description'
              name="description"
              value={uglyThing.description}
              onChange={handleChange}
              />
              <button className="saveEdit" onClick={handleSubmit}>Submit</button>
            </div>

            <div className="uglyThing">

              <h2 className='uglyThing--title'>{uglyThing.title}</h2>
              <img src={uglyThing.imgUrl} className='uglyThing--img'/>
              <p className='uglyThing--description'>{uglyThing.description}</p>
            </div>

        </main>
        {uglyThingListElement}
        <Footer />
    </>
  )
}

export default App
