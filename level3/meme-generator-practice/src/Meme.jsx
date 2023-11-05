
import React, { useEffect, useState } from "react";
import SavedMemeList from "./SavedMemeList";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    memeId: ''
  });

  //list of all meme photos
  const [allMemes, setAllMemes] = useState([])

  // get new meme photo
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
  }
  //Api call to get a new photo for meme
  useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
          .then(res => res.json())
          .then(data => setAllMemes(data.data.memes))
          .catch(err => console.log(err))
  }, [])
  
  //update meme state
  function handleChange(event) {
      const {name, value} = event.target
      setMeme(prevMeme => ({
          ...prevMeme,
          [name]: value
      }))
  }

  const [savedMemes, setSavedMemes] = useState([]);

  // save button
  function save() {
    const memeId = Date.now();
    setSavedMemes((prevMemes) => {
      return [...prevMemes, {...meme, memeId: memeId}]
    });
  }

  console.log(savedMemes)
  //delete button
  function deleteMeme(memeId) {
    setSavedMemes(prevMemes => prevMemes.filter(meme => meme.memeId !== memeId))
  }
  //Edit button
  const saveEditedMeme = (memeId, edit) => {
    setSavedMemes(prevMemes => prevMemes.map(meme => meme.memeId !== memeId ? meme : edit));
    }


  

  const savedMemeList = savedMemes.map((meme) => {
    return (
      <SavedMemeList
        key={meme.memeId}
        meme={meme}
        deleteMeme={() => deleteMeme(meme.memeId)}
        saveEditedMeme={saveEditedMeme}
      />
    );
  });

  return (
    <main>
      <div className="form">
        <input 
          className="form--input" 
          type="text" 
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          className="form--input" 
          type="text" 
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button 
          className="memebtn" 
          onClick={getMemeImage}>
            Get your Meme image
        </button>
      </div>

      <div className="meme">
        <div className="meme--container">
          <img src={meme.randomImage} className="meme--image" alt="Meme" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
            <button className="saveEdit" onClick={save}> Save Meme </button>
      
      <>
        {savedMemeList}
      </>
    </main>
  );
}



