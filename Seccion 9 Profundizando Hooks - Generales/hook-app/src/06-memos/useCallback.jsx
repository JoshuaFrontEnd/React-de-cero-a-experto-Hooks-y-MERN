import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

  const [ counter, setCounter ] = useState( 10 )

  // - useCallback es un Hook de React que te permite almacenar la definición de una función entre renderizados
  // const increment = useCallback(() => {
  //   setCounter( ( counter ) => counter + 1 )
  // },[])

  // - Si necesitamos enviar un argumento al "callback", por ejemplo queremos incrementar los numeros de 5 en 5 lo hacemos de la siguente manera:
  const increment = useCallback(( value ) => {
    setCounter( ( counter ) => counter + value )
  },[])

  // const increment = () => {
  //   setCounter( counter + 1 )
  // }

  return (
    <>

      <h1>useCallback Hook: { counter } </h1>
      <hr />

      <ShowIncrement increment={ increment } />

    </>
  )
}