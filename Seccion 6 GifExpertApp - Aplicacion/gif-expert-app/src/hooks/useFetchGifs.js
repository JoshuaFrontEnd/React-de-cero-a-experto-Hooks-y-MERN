import { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    // - Seteo un estado "arreglo" para las imagenes que voy a cargar
    const [ images, setImages ] = useState([])

    // - Seteo el "loading"
    const [ isLoading, setIsLoading ] = useState( true )

    // - Creo una promesa para obtener las imagenes desde la API, agrego esas imagenes a mi estado "arreglo" con la funcion "setImages" de "useState"
    const getImages = async () => {
      const newImages = await getGifts( category )
      setImages( newImages )
      setIsLoading( false )
    }

    // - Con el Hook "useEffect" llamo a la funcion "getImages" que con una promesa obtiene las imagenes de la API
    useEffect(() => {
      getImages()
    }, [])

  return {
    images,
    isLoading
  }

}