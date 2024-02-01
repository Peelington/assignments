import React from "react"
import { useNavigate } from "react-router-dom"

export default function StoreProducts(props) {

  const navigate = useNavigate()
  console.log(props)

  function handleClick(){
    navigate(`/product/${props.productId}`)
  }


  return (
    <div onClick={handleClick}>
      <h1>{props.item}</h1>
      <p>{props.type}</p>
      <p>{props.price}</p>
      <p>{props.material}</p>
      <p>{props.details}</p>
    </div>
  )
}