import { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import BlogList from './BlogList'
import {blogpost} from './blogpost'
import Footer from './Footer'



function App() {
  const card = blogpost.map(item => {
  return (
    <>
    <BlogList
      key = {item.id}
      title = {item.title}
      subTitle = {item.subTitle}
      author = {item.author}
      date = {item.date}
      
      />
      <hr />
      </>
  )
})

  return (
    <div>
      <Header />
        <Navbar />
          {card}
          
      <Footer />
    
    </div>
  )
}
export default App