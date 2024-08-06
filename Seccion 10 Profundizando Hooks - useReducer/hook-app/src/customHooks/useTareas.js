import { useEffect, useReducer } from 'react'
import { tareaReducer } from '../08-useReducer/tareaReducer'

const initialState = []

// - Con el tercer parametro del hook "useReducer", especificamente con la funcion "init" inicializo el "state" con las tareas guardadas en el localstorage, si no existen las tareas inicializamos con un arreglo vacío para evitar errores
const init = () => {
  return JSON.parse( localStorage.getItem( 'tareas' )) || []
}

export const useTareas = () => {

  const [ tareas, dispatch] = useReducer( tareaReducer, initialState, init )

  // - Para guardar la informacion en el localStorage y usarla como estado, necesito usar "useEffect", ya que tecnicamente necesito sincronizar la informacion de este componente con un sistema externo (en este caso localStorage), y esta informacion va a ir actualizandose cada vez que cambie el estado
  useEffect(() => {

    localStorage.setItem( 'tareas', JSON.stringify( tareas ) )

  }, [ tareas ])


  // console.log( 'Estado inicial: ', initialState )
  // console.log( 'Lista de tareas: ', tareas )

  const handleNewTarea = ( tarea ) => {

    // - Defino la "action" que voy a enviar con la funcion "dispatch" para copiar y modificar "initialState"
    const action = {
      type: '[TAREA] Agregar tarea',
      payload: tarea
    }

    dispatch( action )

  }

  const handleDeleteTarea = ( id ) => {
    dispatch({
      type: '[TAREA] Remover tarea',
      payload: id
    })
  }

  const handleToggleTarea = ( id ) => {
    dispatch({
      type: '[TAREA] Toggle tarea',
      payload: id
    })
  }

  return {
    tareas,
    tareasTotal: tareas.length,
    tareasPendientes: tareas.filter( tarea => !tarea.done).length,
    handleNewTarea,
    handleDeleteTarea,
    handleToggleTarea
  }

}