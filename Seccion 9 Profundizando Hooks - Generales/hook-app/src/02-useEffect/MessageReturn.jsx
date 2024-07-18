import { useState } from 'react'
import { useEffect } from 'react'

export const MessageReturn = () => {

  const [ coords, setCoords ] = useState({ x: 0 , y: 0 })

  useEffect(() => {
    // console.log('Componente Montado')

    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y })
      console.log({ x, y });
    }

    window.addEventListener( 'mousemove', onMouseMove )

    // - El "return" del "useEffect" sirve para "resetear" cualquier funcionalidad creada en el cuerpo del "hook", por ejemplo remover listeners, desmontar componentes, etc
    return () => {
      // console.log('Componente Desmontado')

      window.removeEventListener( 'mousemove', onMouseMove )

    }
  }, [])

  return (
    <>

      {/* <h3>Usuario ya existe</h3> */}
      <h3>{ JSON.stringify( coords ) }</h3>

    </>
  )
}