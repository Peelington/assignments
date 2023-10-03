import React from "react"
import friends from "./Data"
import Friend from './Friend'


export default function Friendslist(props) {
    const friend = friends.map(data => {
        return(
          <>
            <Friend 
                name={data.name}
                age={data.age}
                pet = {data.pets}
                />
          </>
        )}
      )
      
      return(
          <div>
             {friend}
          </div>
      )
}

