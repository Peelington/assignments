import React, {useState, useContext} from "react";
import {ThemeContext} from './themeContext'

export default function Navbar(){

    const {theme} = useContext(ThemeContext)
    console.log(theme)
    return(
        <nav className={`${theme}`}>
            <span>Level 4</span>
            <span>Moving context to seperate files</span>
            <span>Alton Peel</span>
        </nav>
    )
}