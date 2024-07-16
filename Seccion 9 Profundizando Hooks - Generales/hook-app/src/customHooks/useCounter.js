import { useState } from 'react'

export const useCounter = ( initialValue = 10 ) => {

  const [ counter, setCounter ] = useState( initialValue )

  // - Expongo distintas funciones que permiten cambiar el valor de la copia del estado

  const increment = ( valorAincrementar = 1 ) => {
    setCounter( counter + valorAincrementar )
  }

  const reset = () => {
    setCounter( initialValue )
  }

  const decrement = ( valorAincrementar = 1 ) => {

    // - Validando que el valor nunca baje de 0
    if ( counter === 0 ) return
    setCounter( counter - valorAincrementar )

  }

  return {
    counter,
    increment,
    reset,
    decrement
  }

}