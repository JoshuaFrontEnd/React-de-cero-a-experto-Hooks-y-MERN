import { useState } from 'react'

export const useForm = ( initialForm = {} ) => {

  const [ formState, setFormState ] = useState( initialForm )

  const onInputChange = ({ target }) => {

    const { name, value } = target

    setFormState({
      ...formState,
      [ name ]: value
    })

  }

  // - Reset de los valores del formulario:
  const onResetForm = () => {
    setFormState( initialForm )
  }

  return {
    // - Puedo enviar todas las propiedades del formulario, retornando el estado del formulario con el operador "spread"
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}

// - useForm con esteroides: https://www.react-hook-form.com/