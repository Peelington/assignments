import React, {createContext, useState} from "react";

const ThemeContext = React.createContext()

function ThemeContextProvider(props){

    const [theme, setTheme] = useState('night')

    function toggleTheme(value){

        // setTheme(value)

        if(value === 'night'){
            setTheme('night')
            console.log('night')

        }else if(value === 'day'){
            setTheme('day')
            console.log('day')
        }

        // setTheme(prevTheme => prevTheme === 'night' ? 'day' : 'night')
    }

    return (
        <ThemeContext.Provider value={{
            toggleTheme: toggleTheme,
            theme: theme
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}