import React from "react"
import memeData from "./memeData"

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memeData)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    return(
        <main className="">
            <div className="form">

                <input 
                className="form--input" 
                type="text" 
                placeholder="Top Text"/>

                <input 
                className="form--input" 
                type="text" 
                placeholder="Bottom Text"/>

                <button 
                className="memebtn" 
                onClick={getMemeImage}
                >Create your Meme
                </button>

            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}