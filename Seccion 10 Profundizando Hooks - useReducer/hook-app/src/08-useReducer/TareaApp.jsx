import { TareaList } from './TareaList'
import { TareaAdd } from './TareaAdd'
import { useTareas } from '../customHooks/useTareas'

export const TareaApp = () => {

  const { tareas, tareasTotal, tareasPendientes, handleDeleteTarea, handleToggleTarea, handleNewTarea } = useTareas()

  return (
    <>
      <div className="d-flex align-items-end justify-content-between">
        <h1>Lista de Tareas</h1>
        <h4>Tareas en total: { tareasTotal }, Por hacer: { tareasPendientes }</h4>
      </div>
      <hr />

      <div className="row">
        <div className="col-7">

          <TareaList
            tareas={ tareas }
            onDeleteTarea={ handleDeleteTarea }
            onToggleTarea={ handleToggleTarea }
          />

        </div>
        <div className="col-5">

          <h4>Agregar Tarea</h4>
          <hr />

          {/* Revisar en apuntes de React: "Diferentes formas de pasar una función como props" */}
          <TareaAdd onNewTarea={ handleNewTarea } />

        </div>
      </div>

    </>
  )
}