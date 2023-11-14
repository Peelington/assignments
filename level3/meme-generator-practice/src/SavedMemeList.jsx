
import { useState } from "react";

export default function SavedMemeList({ meme, deleteMeme, saveEditedMeme }) {

    const [editing, setEditing] = useState(false);
    const [edit, setEdit] = useState({
        topText: meme.topText,
        bottomText: meme.bottomText,
        randomImage: meme.randomImage,
        memeId: meme.memeId
    })

    //when Edit is click editing turns true
    const handleEditClick = () => {
      setEditing(true);
    };
  
    // when cancel is click editing is set to false
    const handleCancelClick = () => {
      setEditing(false);
    };


    const handleChange = (e) => {
        const {name, value} = e.target
        setEdit(prev => {
            return {
                ...prev, 
                [name] : value
            }
        })
    }
    
    // save button to update EdtitedMeme
    const handleSaveClick = () => {
      saveEditedMeme(meme.memeId, edit);
      setEditing(false);
    };


  return (
    <>
      <div className="meme">
        <div className="meme--container">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{editing ? <input type="text" name="topText" value={edit.topText} onChange={handleChange} /> : meme.topText}</h2>
            <h2 className="meme--text bottom">{editing ? <input type="text" name="bottomText" value={edit.bottomText} onChange={handleChange} /> : meme.bottomText}</h2>
        </div>
      </div>
    {/* if editing is true provide delete and edit buttons */}
      {!editing && (
      <div className="memeBtns">
        <button className="saveEdit" onClick={deleteMeme}>Delete</button>
        <button className="saveEdit" onClick={handleEditClick}>Edit</button>
      </div>
      )}
    {/* if editing is true provides save and cancel buttons */}
      {editing && (
        <div>
          <button className="saveEdit"onClick={handleSaveClick}>Save</button>
          <button className="saveEdit"onClick={handleCancelClick}>Cancel</button>
        </div>
      )}
    </>
  );
}
