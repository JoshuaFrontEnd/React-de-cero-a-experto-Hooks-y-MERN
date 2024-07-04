import PropTypes from 'prop-types'

/* eslint-disable react/no-unescaped-entities */
export const Props = ({ title, numeros }) => {
  return (
    <>
      <h2>Props</h2>
      <p>Las props son una manera de pasar informacion desde un componente "Padre" a un componente "Hijo", por ejemplo, la informacion a continuacion esta seteada desde un componente padre llamado "main" y es enviada al componente hijo llamado "Props"</p>
      <p>{ title }</p>
      <p>{ numeros + 1 }</p>
    </>
  )
}

// - Las PropTypes nos sirven para especificar y validar el tipo de Props
// - Despues de instalarlas con Yarn add prop-types se configuran de la siguiente manera:

Props.propTypes = {
  title: PropTypes.string.isRequired,
  numeros: PropTypes.number.isRequired,
}

// - Las DefaultProps nos permiten "setear" un valor por defecto de propiedad en caso de que esta no venga declarada por ejemplo, si no viniese el "titulo" se mostraria: "No hay titulo"

Props.defaultProps = {
  title: 'No hay titulo'
}