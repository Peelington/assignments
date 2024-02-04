import React, { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductContext } from "./ProductContext"
import axios from "axios"


export default function SingleProduct(props){

  const {productId} = useParams()

  const {productItems, setProductItems} = useContext(ProductContext)

  const requestedItem = productItems.find(product => product._id === productId)

  // const [updates, setUpdates] = useState(requestedItem)
  




 function handleBuy(updates, productId){
  // console.log(requestedItem._id)
    axios.put(`/api/product/${requestedItem.productId}`, updates)
     .then(res =>{
      setProductItems(prevItems => prevItems.map(item => item._id !== requestedItem.productId ? item : item.sold = true))
    // .then(console.log('test'))
      // console.log(item)
    })
     .catch(err => console.log(err))
  }
// console.log(requestedItem)


  return(
    <div className="single-item">
      <h1 className="item-name">{requestedItem.item}</h1>
      <img src={requestedItem.imgurl} className='item-img'/>
      <p className="item-type">{requestedItem.furnitureType}</p>
      <p className="item-price">${requestedItem.price}</p>
      <p className="item-material">Material type: {requestedItem.material}</p>
      <p className="item-details">{requestedItem.details}</p>
      <button className="buyBtn" onClick={handleBuy}>Buy this Item</button>
    </div>
  )
}