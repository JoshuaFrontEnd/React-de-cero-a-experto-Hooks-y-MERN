import { useForm } from '../customHooks/useForm'

export const TareaAdd = ({ onNewTarea }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const onFormSubmit = ( event ) => {
    event.preventDefault()

    if ( description.length <= 1 ) return

    const newTarea = {
      id: new Date().getTime(),
      description,
      done: false
    }

    onNewTarea( newTarea )
    onResetForm()

  }

  return (
    <form onSubmit={ onFormSubmit }>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={ description }
        onChange={ onInputChange }
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-3"
      >
        Agregar
      </button>
    </form>
  )

}