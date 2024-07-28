export const tareaReducer = ( state = [], action ) => {

  console.log( state )
  console.log( action );

  switch ( action.type ) {

    case '[TAREA] Agregar tarea':
      return [ ...state, action.payload ]

    // Para remover una tarea de mi lista de tareas:
    // - Creo una accion donde envio el "id" de la tarea a eliminar en el "payload" de esa accion
    // - Luego filtro el estado actual (lista de tareas), creando un nuevo estado (nueva lista de tareas)
    // - Voy tarea por tarea comparando si alguna tiene ese "id", si no lo tiene se agrega esa tarea a la nueva lista de tareas, si lo tiene es excluida (Por lo tanto eliminada)
    // - Retorno un nuevo estado donde no existe la tarea removida
    case '[TAREA] Remover tarea':
      return state.filter( tarea => tarea.id !== action.payload )

    case '[TAREA] Toggle tarea':
      return state.map( tarea => {

        if ( tarea.id === action.payload ) {
          return {
            ...tarea,
            done: !tarea.done
          }
        }

        return tarea

      })

    default:
      return state
  }

}