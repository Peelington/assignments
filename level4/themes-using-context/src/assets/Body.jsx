import React, {useContext, useState} from "react";
import {ThemeContext} from './themeContext'

export default function Body(){

    const {theme, toggleTheme} = useContext(ThemeContext)
    
    const handleDropdownChange = ( e ) => {
        const { value } = e.target
        toggleTheme(value)
    }

    return (
        <main>
            <h1 className={`${theme}`}>Click on the Button and see what happens, you are currently in {theme} mode</h1>
            {/* <button onClick={toggleTheme}>Click to change theme</button> */}
            <select onChange={ handleDropdownChange }>
                <option value="night">Night</option>
                <option value='day'>Day</option>
            </select>
        </main>
    )
}