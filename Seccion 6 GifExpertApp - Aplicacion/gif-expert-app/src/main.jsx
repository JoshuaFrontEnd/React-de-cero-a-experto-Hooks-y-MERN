import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'

// Para que el estilo css sea global en toda la aplicación de react, se puede importar desde acá de la siguiente manera
import './styles.css'

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
