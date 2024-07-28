const initialState = [{
  id: 1,
  tarea: 'Aprender que son los reducers',
  done: false
}]

// - El reducer es una funcion pura que recibe dos argumentos: el estado actual (state), y la accion que le dira al reducer como actualizar el estado
const tareaReducer = ( state = initialState, action = {} ) => {

  // - En el reducer validamos que tipo de accion se esta solicitando y dependiendo de la que sea actualizamos el estado creando una copia, agregando la nueva informacion
  if ( action.type === '[TAREA] agregar tarea' ){
    return [ ...state, action.payload ]
  }

  // Siempre debe retornar un estado
  return state

}

// let tareas = tareaReducer()
// - Esto va a funcionar, pero la idea de React es trabajar con inmutabilidad, y este metodo esta modificando el estado base, por eso no se debe hacer
// tareas.push({
//   id: 2,
//   tarea: 'Aprender que son los reducerssddsa',
//   done: false
// })

// - Creo un nuevo objeto (Tarea) que me gustaria agregar a mi estado actual (Lista de tareas)
const tareaDos = {
  id: 2,
  tarea: 'Aprender como funciona useReducer',
  done: false
}

// - Por eso para modificar el "state" usando un reducer necesitamos definir una accion:
const agregarTareaAccion = {
  type: '[TAREA] agregar tarea',
  payload: tareaDos
}

let tareas = tareaReducer( initialState, agregarTareaAccion )

console.log( initialState ) // Estado inicial sin mutar
console.log( tareas ) // Copia del estado inicial modificado
