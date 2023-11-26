import React, { useState, useContext} from "react";
import { UglyContext } from "./UglyContext";
import axios from "axios";

export default function UglyThings(props){

    const {title, imgUrl, description, ugly_Id} = props
    const { uglyThing, setSavedUglies } = useContext(UglyContext)

    const [editUgly, setEditUgly] = useState({
        title: uglyThing.title,
        imgUrl: uglyThing.imgUrl,
        description: uglyThing.description
    })
    const [editing, setEditing] = useState(false)

    const handleEditChange = (e) => {
        const {name, value} = e.target
        setEditUgly(prevThing => ({
          ...prevThing,
          [name]: value
        }))
    }

    const handleEdit = () => {
        setEditing(true)
    }

    const handleCancel = () => {
        setEditing(false)
    }

    function handleDelete(){
        axios.delete(`https://api.vschool.io/altonpeel/thing/${ugly_Id}`)
        .then((res) => setSavedUglies(prevUglies => [...prevUglies, res.data]))
        .catch(err => console.log(err))
    }  

    function handleSave(){
        axios.put(`https://api.vschool.io/altonpeel/thing/${ugly_Id}`, editUgly)
        .then(res => setSavedUglies(prevUglies => [...prevUglies, res.data]))
        .catch(err => console.log(err))

        handleCancel()
    }
    
    // console.log(editUgly)
    
    return (
        <>
            <div className="uglyThing">
                <div className="uglyThing--container">
                    <h2 className='uglyThing--title'>{title}</h2>
                    <img src={imgUrl} className='uglyThing--img'/>
                    <p className='uglyThing--description'>{description}</p>
                {!editing && (
                    <div>
                      <button className="saveEdit" onClick={handleDelete}>Delete</button>
                      <button className="saveEdit" onClick={handleEdit}>Edit</button>
                    </div>
                )}
                {editing && (
                    <div>
                        <input type="text" name="title" placeholder="New Title" value={editUgly.title} onChange={handleEditChange}/>
                        <input type="text" name="imgUrl" placeholder="New Image Url" value={editUgly.imgUrl} onChange={handleEditChange}/>
                        <input type="text" name="description" placeholder="New Description" value={editUgly.description} onChange={handleEditChange}/>
                        <button className="saveEdit"onClick={handleSave}>Save</button>
                        <button className="saveEdit"onClick={handleCancel}>Cancel</button>
                    </div>
                )}
                </div>
            </div>
        </>
    )
}
