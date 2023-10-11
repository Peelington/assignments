import { useState } from 'react'
import Dice from './Dice';

const initValue = [
    {
        number: 1,
        isLocked: false
    },
    {
        number: 1,
        isLocked: false
    },
    {
        number: 1,
        isLocked: false
    },
    {
        number: 1,
        isLocked: false
    },
    {
        number: 1,
        isLocked: false
    },
]
export default function DiceBox(){
const [numbers, setNumbers] = useState(initValue)

    function rollDice(){
        //setNumbers(Array.from( {length: 5}, () => Math.floor(Math.random() * 6 + 1 )))
        setNumbers(prevNumbers => prevNumbers.map(dice => dice.isLocked !== true ? {number: Math.floor(Math.random() * 6 + 1 ), isLocked: false} : dice))
        // ~~ = Math.floor()
        // setNumbers([...numbers].map(e => ~~(Math.random()*6 + 1)))
        console.log(numbers)
    }
    console.log(numbers)
    function reset(){
        setNumbers(initValue)
    }

    function handleLock(item, diceIndex){
        setNumbers(prevNumbers => prevNumbers.map((dice, index) => index !== diceIndex ? dice : item))
    }
 
    const die = numbers.map((dice, index) => {
        return(
            <Dice 
            index ={index}
            className = "dice"
            number = {dice.number} 
            isLocked = {dice.isLocked}
            handleLock = {handleLock}
            />
        )
    })

    return(
        <>
            <div className="diceBox">

                {die}
                
                
                <button onClick = {rollDice} className = "roll"> Roll Dice </button>
                <button onClick={reset} className = "reset"> Reset Dice </button>
            </div>
        </>
    )
}