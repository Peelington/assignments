import React, {useState, useContext} from "react";
import {ThemeContext} from './themeContext'

export default function Footer(){

    const {theme} = useContext(ThemeContext)
    return (
        <footer className={`${theme}`}>
            This isnt my foot its a bunch of pixels in diffent colors
        </footer>
    )
}