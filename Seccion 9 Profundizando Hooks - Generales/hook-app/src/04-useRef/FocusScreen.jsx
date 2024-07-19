import { useRef } from 'react'

export const FocusScreen = () => {

  // - useRef es un Hook de React que te permite referenciar un valor que no es necesario para el renderizado
  const inputRef = useRef()

  const onClick = () => {
    // console.log( inputRef )
    inputRef.current.select()
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={ inputRef }
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button
        className="btn btn-dark mt-2"
        onClick={ onClick }
      >
        Set Focus
      </button>

    </>
  )
}