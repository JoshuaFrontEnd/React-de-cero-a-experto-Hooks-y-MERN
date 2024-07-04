/* eslint-disable react/no-unescaped-entities */
const newMessage = {
  message: 'Hola Mundo',
  title: 'Triviño'
}

const getSuma = ( a, b ) => {
  return a + b
}

export const ImpresionVariables = () => {
  return (
    <>
      <p>En React podemos imprimir cualquier expresion de javacript en un framento HTML, a excepcion de objetos</p>
      {/* La siguiente linea dara error */}
      {/* <p>Objeto { newMessage }</p> */}
      <p>Podemos imprimir propiedades de un objeto como: { newMessage.message } </p>
      <p>Ahora si necesitamos si o si escribir un objeto tenemos que convertirlo a cadena de texto con JSON.strigify:</p>
      <p>{ JSON.stringify( newMessage ) }</p>
      <p>Podemos imprimir el resultado de una funcion que sume dos numeros, ej: 1 + 10:</p>
      <p>Resultado de la funcion: { getSuma( 1, 10 ) } </p>
      <p>Pero no podemos imprimir el resultado de una funcion asincrona, ya que una Promesa es asincrona y mientras se resuelve, React podria devolver un error en la impresion del resultado </p>
      <p>Para imprimir el resultado de una funcion asincrona dentro de HTMX es recomendado usar algun Hook como "useState" o "useEffect" o incluso crear uno personalizado llamado "useAsync"</p>
    </>
  )
}