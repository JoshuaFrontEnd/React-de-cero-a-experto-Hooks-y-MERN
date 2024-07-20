import { useMemo, useState } from 'react'
import { useCounter } from '../customHooks/useCounter'

// - Funcion creada como ejemplo que hace un calculo/proceso "costoso" o "pesado"
const heavyStuff = ( iterationNumber = 100 ) => {

  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahí vamos...')
  }

  return `${ iterationNumber } iteraciones realizadas`

}

export const MemoHook = () => {

  const { counter, increment } = useCounter( 1000 )
  const [ show, setShow ] = useState( true )

  // - Para evitar que el proceso anterior se vuelva a ejecutar cada vez que se renderice el componente, podemos memorizar el resultado de su proceso usando el Hook "useMemo", y solo se volvera a ejecutar si cambia el valor de su dependencia, en este caso el valor de "counter"
  const memorizedValue = useMemo( () => heavyStuff( counter ), [counter] )

  return (
    <>

      <h1>Counter: <small>{ counter }</small> </h1>
      <hr />

      <h4>{ memorizedValue }</h4>

      <button
        className="btn btn-dark"
        onClick={ () => increment() }
      >
        +1
      </button>

      <button
        className="btn btn btn-outline-dark"
        onClick={ () => setShow( !show )  }
      >
        Show/Hide { JSON.stringify( show ) }
      </button>

    </>
  )
}

// - useMemo es un Hook de React que te permite guardar en caché el resultado de un cálculo entre renderizados