// - En React cuando existen multples elementos HTML se deben de envolver en un "Fragment"
// import { Fragment } from 'react'

// export const Fragment = () => {
//   return (
//     <Fragment>
//       <h2>First App</h2>
//       <h3>Soy un fragmento</h3>
//     </Fragment>
//   )
// }

// - Tambien existe la version abreviada de "Fragment" donde no hay que importar nada
export const Fragment = () => {
  return (
    <>
      <h2>First App</h2>
      <h3>Soy un fragmento</h3>
    </>
  )
}