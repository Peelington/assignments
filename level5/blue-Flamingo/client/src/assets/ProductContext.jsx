import React, { useState, useEffect } from "react";

const ProductContext = React.createContext()

function ProductContextProvider(props) {


  return (
    <ProductContext.Provider value={{

    }}>

      {props.children}

    </ProductContext.Provider>
  )
}

export {ProductContext, ProductContextProvider}