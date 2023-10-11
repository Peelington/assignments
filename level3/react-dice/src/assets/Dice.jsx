import { useState, useEffect } from 'react'

export default function Dice(props){

    const [input, setInput] = useState({
        number: props.number,
        isLocked: props.isLocked
    })

    useEffect(()=> {
        setInput(prevInput => ({
            ...prevInput,
            number: props.number
        }))

    },[props.number])

    function handleChange(e){
        const {name, checked} = e.target
        setInput(prev => {
            return{
                ...prev,
                [name]: checked
            }
        })
    }
    useEffect(() => {
        props.handleLock(input, props.index)

    },[input])

    console.log(input)
    return(
        <div>
            <h3 className= {props.className}>{props.number}</h3>
            <input className='locked' type='checkbox' name='isLocked' checked={input.isLocked} onChange={handleChange}/>
            <label>Lock dice roll</label>
        </div>
    )
}