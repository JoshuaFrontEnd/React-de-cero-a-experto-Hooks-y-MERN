import React from 'react'
import ReactDOM from 'react-dom/client'

// - Importacion por "default"
// import App from './HelloWorldApp'

// - Importacion por funcionalidad
// import { App } from './HelloWorldApp'

// ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

// - Importacion por funcionalidad usando arrow function y nombre personalizado en el componente
// import { HelloWorldApp } from './HelloWorldApp'
// import { Fragment } from './Fragment'
// import { ImpresionVariables } from './Impresion-variables'
// import { Props } from './Props'

// - Con Vite podemos importar estilos css directamente en js:
import './styles.css'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    {/* <HelloWorldApp />
    <Fragment />
    <ImpresionVariables />
    <Props title="Hola, soy Goku" numeros={ 123 }  /> */}
    <CounterApp value={ 100 } />
  </React.StrictMode>
)