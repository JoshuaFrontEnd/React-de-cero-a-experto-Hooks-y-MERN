import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState([])

  const onInputChange = ({ target }) => {
    setInputValue( target.value )
  }

  const onSubmit = ( event ) => {
    event.preventDefault()

    // - Validar que por lo menos se ingresen dos caracteres en el input
    if ( inputValue.trim().length <= 1 ) return

    // - "Limpiar" el input despues de insertar un texto
    setInputValue('')

    // setCategories( categories => [ ...categories, inputValue ] )
    onNewCategory( inputValue.trim() )

  }

  return (
    // <form onSubmit={ ( event ) => onSubmit( event ) }>
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Escribe el gif y luego presiona ENTER"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}