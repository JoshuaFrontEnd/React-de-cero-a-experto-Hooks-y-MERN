import { useState } from 'react'

let counters = {
  counter1: 10,
  counter2: 20,
  counter3: 30
}

export const CounterApp = () => {

  const [ copycounters, setCopycounter ] = useState( counters )

  const { counter1, counter2, counter3 } = copycounters

  // - Como nunca muta el estado, este valor siempre sera el mismo
  console.log( counters )

  // - Se trabaja siempre con una copia del estado, estos valores son los que cambiaran
  console.log( copycounters )

  return (
    <>

      <h1>Counter: { counter1 } </h1>
      <h1>Counter: { counter2 } </h1>
      <h1>Counter: { counter3 } </h1>

      <hr />

      <button
        className='btn btn-dark'
        onClick={ () => setCopycounter({
          ...copycounters,
          counter1: counter1 + 1
        }) }
      >+1</button>

    </>
  )
}