import { memo } from 'react';

export const ShowIncrement = memo(({ increment }) => {

  console.log('Me volví a generar :(');

  return (
    <button
      className='btn btn-dark'
      onClick={() => {
        // increment()
        // - Incrementando de 5 en 5, recordar escribir esta definicion en "useCallback"
        increment(5)
      }}
    >
      Incrementar
    </button>
  )
})

ShowIncrement.displayName = 'Show Increment'

// - En este caso en especifico "memo" no funcionara en el componente, ya que "increment" siempre tendra un valor distinto, y cada vez que una "props" del componente cambia, React lo vuelve a renderizar, para poder memorizar el valor de esa propiedad, que en realidad es una funcion, debemos usar el hook "useCallback" en el elemento padre del componente