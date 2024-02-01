import React from "react"
import { useParams } from "react-router-dom"


export default function SingleProduct(props){

  const {productId} = useParams()

  const {productItems} = props

  const requestedItem = productItems.find(product => product._id === productId)


  return(
    <>
      <h1>{requestedItem.item}</h1>
    </>
  )
}