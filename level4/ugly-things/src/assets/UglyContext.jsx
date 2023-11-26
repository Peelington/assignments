import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import UglyThings from "./UglyThings";

const UglyContext = React.createContext()

function UglyContextProvider(props){
    
    const [uglyThing, setUglyThing] = useState({
        title: "",
        description: "",
        imgUrl: ""
    })
    const [savedUglies, setSavedUglies] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target
        setUglyThing(prevThing => ({
          ...prevThing,
          [name]: value
        }))
    }

    // console.log(uglyThing)

    function handleSubmit(e){
        e.preventDefault();

        axios.post("https://api.vschool.io/altonpeel/thing", uglyThing)
            .then((res) => setSavedUglies(prevUglies => [...prevUglies, res.data]))
            .catch((err) => { console.log('ERROR', err) })

        }

        useEffect(() => {
            axios.get("https://api.vschool.io/altonpeel/thing")
                .then(res => setSavedUglies(res.data))
                .catch(err => console.log(err))
        }, [savedUglies.length])

        

        console.log(savedUglies)
    return(
        <UglyContext.Provider value={{
            handleSubmit,
            uglyThing,
            setUglyThing,
            savedUglies,
            setSavedUglies,
            handleChange
        }}>
            {props.children}
        </UglyContext.Provider>
    )

}

export {UglyContext, UglyContextProvider}

