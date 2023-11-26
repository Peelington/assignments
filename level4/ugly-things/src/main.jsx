import React from 'react'
import ReactDOM from 'react-dom/client'
import { UglyContextProvider } from './assets/UglyContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UglyContextProvider>
    <App />
  </UglyContextProvider>,
)
