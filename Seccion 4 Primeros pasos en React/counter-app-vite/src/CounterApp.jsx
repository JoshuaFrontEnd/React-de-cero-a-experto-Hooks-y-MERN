import { useState } from 'react'
import PropTypes from 'prop-types'

const start = 0

export const CounterApp = ({ value }) => {

  // - Con el "hook" "useState" podemos definir una variable de estado, en este el valor inicial de la variable se pasa como argumento del hook y tendra valor 0, y de esta funcion desestructuro un arreglo:
  // - Donde el primer valor sera una variable con el valor inicial del argumento osea 0, el nombre de esta variable puede ser cualquier cosa, cada vez que el valor de esta variable cambia hay que considerar que se vuelve a renderizar todo el componente, por eso no es recomendable ejecutar aca directamente peticiones asincronas, para eso existen otros Hooks, aunque React es extremadamente eficiente a la hora de volver a renderizar
  // - El segundo valor del arreglo sera una funcion que por convencion se nombra con el prefijo "set" seguido del nombre de la variable anterior, con esta funcion podremos cambiar el valor de esa variable
  // const [ counter, setCounter ] = useState( start )

  // - Usando como valor inicial de estado, el valor pasado como "Props"
  const [ counter, setCounter ] = useState( value )

  const handleAdd = () => {
    // - Al usar la funcion desestructurada del "useState" podemos modificar el estado sin mutarlo, "start" seguira valiendo 0 y "counter" ira cambiando de valor
    // setCounter( counter + 1 )

    // - Cuando desconocemos el valor del estado inicial podemos setearlo y modificarlo de la siguiente manera donde "c" equivale al valor inicial de "counter"

    setCounter( (c) => c + 1  )


  }

  const handleSustract = () => setCounter( counter - 1 )
  const handleReset = () => setCounter( value )

  return (
    <>
      <h1>CounterApp</h1>
      <h2>Valor inicial del estado: { start }</h2>
      <p>Estado modificado al hacer click en el boton: { counter }</p>

      {/* <button onClick={ ( event ) => { handleAdd( event ) } }> */}
      <button onClick={ handleAdd }> +1 </button>
      <button onClick={ handleSustract }> -1 </button>
      <button onClick={ handleReset }> Reset </button>

    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}