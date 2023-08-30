import {React, useState} from "react";


export default function Form(){

    const [inputs, setIputs] = useState({
        topText:"",
        bottomText:"",
    });

    function handleChange(e){
        console.log(e)
        const {name, value} = e.target
        setIputs(prevInputs =>{
            return {
                ...prevInputs,
                [name]: value
            }
        })
    }

    console.log(inputs)

    return (
        <>
        <input 
        name = "topText" 
        placeholder="topText" 
        value = {inputs.topText}
        onChange={handleChange}/>

        <input 
        name = "bottomText" 
        placeholder="bottomText" 
        value = {inputs.bottomText}
        onChange={handleChange}/>
        <button>
            submit
        </button>
        <div>
        <p>{inputs.topText}</p>
        <p>{inputs.bottomText}</p>
        </div>
        </>
    )
}