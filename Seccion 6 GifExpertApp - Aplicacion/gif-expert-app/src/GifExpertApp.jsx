import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['One Punch'])

  const onAddCategory = ( newCategory ) => {

    // - Validando que la categoria agregada no exista, si existe no se agrega y el input se vacia
    if ( categories.includes( newCategory ) ) return

    // - Modificando el estado con valores nuevos cada vez que se ingresa un valor al input
    setCategories([ newCategory, ...categories ])
  }

  return (
    <>

      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      {/* <AddCategory setCategories={ setCategories } /> */}
      {/* El codigo anterior es igual a este:
        <AddCategory
          setCategories={(categories) => {
            setCategories(categories);
          }}
        />
        Por lo que implicitamente al pasar la funcion "setCategories" estamos pasando los valores de "categories"
      */}

      {/*

        El codigo anterior tiene el problema de que "categories" es pasado de manera implicita sin ningun tipo de evaluacion, la idea es que podamos gestionar los datos entre componentes de manera mas clara y limpia, por ejemplo, validar que no se estan enviando datos con "keys" duplicadas, que poseen el formato especifico, etc

        Para eso podemos refactorizar de la siguiente manera:

      */}

      <AddCategory
        // onNewCategory={ ( value ) => onAddCategory( value ) }
        onNewCategory={ onAddCategory }
      />


      {/* Listado de Gif */}
      { categories.map(( category ) => (
        <GifGrid key={ category } category={ category } />
      ))
      }

        {/* Gif item */}
    </>
  )
}