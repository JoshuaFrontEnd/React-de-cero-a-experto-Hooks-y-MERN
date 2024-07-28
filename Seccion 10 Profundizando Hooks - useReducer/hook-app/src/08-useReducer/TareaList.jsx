import { TareaItem } from './TareaItem'

export const TareaList = ({ tareas, onDeleteTarea, onToggleTarea }) => {

  return (
    <ul className="list-group">
      {
        tareas.map( tarea => (
          <TareaItem
            key={ tarea.id }
            { ...tarea }
            onDeleteTarea={ onDeleteTarea }
            onToggleTarea={ onToggleTarea }
          />
        ))
      }
    </ul>
  )

}