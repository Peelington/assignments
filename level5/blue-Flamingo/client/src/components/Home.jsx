import React, { useState, useEffect } from "react"
import axios from "axios"
import StoreProducts from "./StoreProducts"
// import {useNavigate} from "react-router-dom"


export default function Home(props) {

  const {productItems} = props  

  const storeItems = productItems.map(product =>
    <StoreProducts
      key={product._id}
      item={product.item}
      type={product.type}
      price={product.price}
      material={product.material}
      productId = {product._id}
    />
  )


  return (
    <>
      
      {storeItems}
    </>
  )
}

// const navigate = useNavigate()

// function handleClick(){
//   navigate(`/api/product/${}`)
// }