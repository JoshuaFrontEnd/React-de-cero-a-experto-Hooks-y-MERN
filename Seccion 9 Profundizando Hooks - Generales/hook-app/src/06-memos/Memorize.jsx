import { useState } from 'react'
import { useCounter } from '../customHooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

  const { counter, increment } = useCounter( 10 )
  const [ show, setShow ] = useState( true )

  return (
    <>

      <h1>Counter: <Small value={ counter } /> </h1>
      <hr />

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