import { memo } from 'react';

export const Small = memo(({ value }) => {

  console.log('Me volvi a dibujar');

  return (
    <small>{ value }</small>
  )
})

Small.displayName = 'Small'

/*

  - La funcion "memo" de React memoriza un componente evitando que se vuelva a renderizar, por ejemplo si tenemos un componente "Padre" cada vez que se renderice, volvera a renderizar a los elementos "Hijos", para evitar que se rendericen los componentes "Hijos" o un componente "Hijo" en especifico podemos usar "memo" para memorizar estos componentes y evitar que React lo vuelva a renderizar cada vez que se renderice el elemento "Padre".
  - Si las "props" del elemento "memoizado" cambian este se volvera a renderizar
  - Se recomienda usar "memo" solo en componentes que no necesiten ser re-renderizados para evitar hacer calculos innesesarios que afecten el rendimiento de nuestra aplicacion
  
  */