import { heroes } from './data/heroes';

// - Observaciones:
// - El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada
// - El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada

// - Retornar un elemento mediante el "id" usando desestructuracion:
// const getHeroesById = ( value ) => {
//   return heroes.find(( hero ) => {
//     if ( hero.id === value ) {
//       return true
//     } else {
//       return false
//     }
//   })
// }

// - Codigo anterior minimizado
export const getHeroesById = value => heroes.find( hero => hero.id === value )

// console.log( getHeroesById( 2 ) ) // {id: 2, name: 'Spiderman', owner: 'Marvel'}

// - Retornar todos los elementos que pertenezcan a 'DC'
export const getHeroesByOwner = value => heroes.filter( hero => hero.owner === value )

// console.log( getHeroesByOwner( 'DC' ) ) // {id: 2, name: 'Spiderman', owner: 'Marvel'}