import React, { useState }from "react";
import AddBountyForm from "./AddBoutyForm";

export default function Bounty(props){
  const {firstName, lastName, type, living, bountyAmount, _id} = props
  const [editToggle, setEditToggle] = useState(false)
  return(
    <div className="bounty">

      { !editToggle ?
        <>
          <h1>{firstName} {lastName}</h1>
          <p>Bounty: {bountyAmount}</p>
          <p>Contract Active: {living ? "yes" : "no"}</p>
          <p>Faction: {type}</p>
          <button className="delBtn"  onClick={() => props.deleteBounty(_id)}>Delete bounty</button>
          <button className="editBtn" onClick={()=> setEditToggle(prevToggle => !prevToggle )}>Edit</button>
        </>
      :
        <>
          <AddBountyForm  
            firstName = {firstName}
            lastName = {lastName}
            type = {type}
            bountyAmount = {bountyAmount}
            _id={_id}
            btnText = "Submit Edit"
            submit={props.editBounty}
            editToggle = {editToggle}
            setEditToggle = {setEditToggle}
            />
          <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>close</button>
        </>
    }
    </div>
  )
}

