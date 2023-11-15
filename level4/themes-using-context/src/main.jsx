import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextProvider } from './assets/themeContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
      <App />
  </ThemeContextProvider>
)
