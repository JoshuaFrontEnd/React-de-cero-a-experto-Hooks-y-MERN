import { useCounter } from '../customHooks/useCounter'

export const CounterWithCustomHook = () => {

  const { counter, increment, reset, decrement } = useCounter()

  return (
    <>

      <h1>Counter with custom hook: { counter }</h1>
      <hr />

      {/* <button className='btn btn-dark' onClick={ increment }>+1</button>
      <button className='btn btn-dark' onClick={ reset }>Reset</button>
      <button className='btn btn-dark' onClick={ decrement }>-1</button> */}

      {/* Una forma para incrementar o decrementar en un valor concreto, es pasando ese valor como argumento */}
      <button className='btn btn-dark' onClick={ () => { increment(2) } }>+1</button>
      <button className='btn btn-dark' onClick={ reset }>Reset</button>
      <button className='btn btn-dark' onClick={ () => { decrement(2) } }>-1</button>

    </>
  )
}