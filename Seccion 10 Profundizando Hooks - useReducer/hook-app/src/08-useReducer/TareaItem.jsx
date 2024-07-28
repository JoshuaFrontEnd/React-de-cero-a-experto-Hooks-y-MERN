export const TareaItem = ({ id, description, done, onDeleteTarea, onToggleTarea } ) => {

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${ done ? 'text-decoration-line-through' : '' }`}
        onClick={ () => onToggleTarea( id ) }
      >
        { description }
      </span>
      <button
        className="btn btn-danger"
        onClick={ () => onDeleteTarea( id ) }
      >
        Borrar
      </button>
    </li>
  )

}