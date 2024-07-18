import { useForm } from '../customHooks/useForm'


export const FormWithCustomHook = () => {

  const { onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  })




  // - Para evitar hacer esto, desestructuro las propiedades directamente desde el "useForm"
  // const { username, email, password } = formState

  return (
    <>

      <h1>Formulario con custom Hook</h1>
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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={ password }
        onChange={ onInputChange }
      />

      <button onClick={ onResetForm } className='btn btn-warning mt-2'>Borrar</button>

    </>
  )
}