import { useState } from 'react'
import Card from "./Card"
import Header from './Header'
import Footer from './Footer'
import vacationSpots from './vacationSpots'
import './App.css'

function App() {
  const card = vacationSpots.map(cardInfo => {
  return (
      <Card 
        key={cardInfo._id}
        place={cardInfo.place}
        price={cardInfo.price}
        timeToGo={cardInfo.timeToGo}
      />
  )
})
  return(
    <>
      <Header />
      <div className = "cardContaner">
        {card}
      </div>
      <Footer />
    </>
  )
}

export default App
