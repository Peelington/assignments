import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { ProductContextProvider } from './assets/ProductContext';
import axios from 'axios';
import Title from './components/Title';
import Home from './components/Home';
import About from './components/About';
import Products from './components/StoreProducts';
import './App.css'
import SingleProduct from './components/SingleProduct';

function App() {

  const [productItems, setProductItems] = useState([])

  function getProducts() {
    axios.get('/api/products')
      .then(res => setProductItems(res.data))
      .catch(err => console.log(err))
  }

// console.log(productItems)

useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <ProductContextProvider>
        <Title />
        <Routes>
          <Route path="/" element={<Home getProducts = {getProducts} productItems = {productItems} />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<SingleProduct productItems ={productItems}/>} />
        </Routes>
      </ProductContextProvider>
    </>
  )
}

export default App

//imrs + e for useEffect