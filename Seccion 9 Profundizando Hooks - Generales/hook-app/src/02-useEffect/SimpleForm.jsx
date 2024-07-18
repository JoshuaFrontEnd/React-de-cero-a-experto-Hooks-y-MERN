import { useEffect, useState } from 'react'
import { MessageReturn } from './MessageReturn'

export const SimpleForm = () => {

  const [ formState, setFormState ] = useState({
    username: 'ioshi',
    email: 'ioshi@gmail.com'
  })

  const { username, email } = formState

  const onInputChange = ({ target }) => {

    const { name, value } = target

    setFormState({
      ...formState,
      [ name ]: value
    })

  }
  // - Tal como lo indica la documentacion de React el Hook "useEffect" permite sincronizar un componente con un sistema externo, el primer argumento que recibe este Hook es un "callback" con la funcionalidad que se necesita ejecutar, y el segundo argumento es una array de dependencias, las dependencias especifican las veces que debe ejecutarse el hook, siempre se va a ejecutar el hook en el primer renderizado y luego segun las dependencias, si no se especifican se ejecutara en cada renderizado, por lo mismo React no recomienda usar "useEffect" sin dependencias
  // useEffect(() => {
  //   console.log('Me ejecutare en cada renderizado!');
  // })

  // - Si se especifica una o mas dependencias, se ejecutara cada vez que cambien esas dependencias, Ejemplo: coloco como dependencia que el hook se ejecute cada vez que cambie el valor de "formState" es decir, cada vez que cambie el estado:
  // useEffect(() => {
  //   console.log('Me ejecutare solo cuando cambie el valor de "formState"!');
  // }, [ formState ])

  // - Otro ejemplo: coloco como dependencia que el hook se ejecute cada vez que cambie el valor del email en el formulario:
  // useEffect(() => {
  //   console.log('El email ha sido cambiado!');
  // }, [ email ])

  // - Si especifico un arreglo vacio de dependencias el hook se ejecutara solo una vez:
  // useEffect(() => {
  //   console.log('Me ejecuto solo una vez!');
  // }, [])



  return (
    <>

      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="correo@correo.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />

      {
        ( username === 'ioshi2' ) && <MessageReturn />
      }


    </>
  )
}