import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category )

  console.log({ isLoading })

  return (
    <>
      <h3>{ category }</h3>

      {/* Mostrando el "loading" con operador ternario: */}
      {/* {
        isLoading
        ? ( <h2>Cargando...</h2> )
        : null
      } */}

      {/* Mostrando el "loading" con operador AND logico: */}
      {
        isLoading && ( <h2>Cargando...</h2> )
      }

      <div className="card-grid">
        {/* {
          images.map( img => (
            <li key={ img.id }>{ img.title }</li>
          ))
        } */}
        {/* Lo anterior se puede refactorizar con desestructuracion quedando asi: */}
        {/* {
          images.map( ({ id, title }) => (
            <li key={ id }>{ title }</li>
          ))
        } */}
        {/* Separando la logica en un componente aparte: */}
        {
          images.map( ( image ) => (
            <GifItem
              key={ image.id }
              // - Enviando las propiedades con la notacion de punto, mejor para casos donde necesitamos enviar propiedades de manera especifica sin necesidad de acceder a todas las propiedades
              // title={ image.title }
              // url={ image.url }
              // - Enviando las propiedades con el operador Rest, mejor para casos donde tenemos muchas propiedades y necesitamos trabajar con o casi todas
              { ...image }
            />
          ))
        }
      </div>
    </>
  )
}