import { useEffect, useState } from 'react'
import { GifItem } from './GifItem'
import { getGifts } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {

  // - Seteo un estado "arreglo" para las imagenes que voy a cargar
  const [ images, setImages ] = useState([])

  // - Creo una promesa para obtener las imagenes desde la API, agrego esas imagenes a mi estado "arreglo" con la funcion "setImages" de "useState"
  const getImages = async () => {
    const newImages = await getGifts( category )
    setImages( newImages )
  }

  // - Con el Hook "useEffect" llamo a la funcion "getImages" que con una promesa obtiene las imagenes de la API
  useEffect(() => {
    getImages()
  }, [])

  return (
    <>
      <h3>{ category }</h3>

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
          images.map( ({ id, title }) => (
            <GifItem key={ id } />
          ))
        }
      </div>
    </>
  )
}