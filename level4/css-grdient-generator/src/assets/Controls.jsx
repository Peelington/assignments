import React, { useState } from 'react'
import Gradient from './Gradient'
import Colors from './Colors'


export default function Controls(){
    
    const [colors, setColors] = useState({
        firstColor: "#ffffff",
        secondColor: "#ffffff",
        angle: 50
    })

    function handleChange(e){
        const {name, value} = e.target
        setColors(prevColors => ({
            ...prevColors,
            [name]: value
        }))
    }
    
    // console.log(colors)
    return (
        <div className='colorPicker'>
            <div className='controlContainer'>
                <Gradient
                    colors={colors}
                />
                <div className="controlBox">

                    <div className='colorInputs'>
                        <h2>Color 1</h2>
                        <h2>{colors.firstColor}</h2>
                        <input 
                        type='color'
                        name="firstColor"
                        value={colors.firstColor}
                        onChange={handleChange}
                        />
                    </div>

                    <div className='colorInputs'>
                        <h2>Color 2 </h2>
                        <h2>{colors.secondColor}</h2>
                        <input 
                        type='color' 
                        name="secondColor"
                        value={colors.secondColor}
                        onChange={handleChange}
                        />
                    </div>

                    <div className='colorInputs'> 
                        <h2>Angle </h2>
                        <h2>{colors.angle}</h2>
                        <input 
                        type='number' 
                        name="angle"
                        value={colors.angle}
                        onChange={handleChange}
                        />
                    </div>
                    </div>
            </div>
            <div className='colorElement'>
            <Colors
                colors={colors}
                />
            </div>
        </div>
    )
}
